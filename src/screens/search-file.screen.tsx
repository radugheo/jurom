import { Search } from "lucide-react-native";
import React, { useState, useCallback } from "react";
import { View, Text, TextInput, ActivityIndicator, Alert } from "react-native";
import { createStyles } from "./search-file.styles";
import { useThemedStyles } from "../hooks/use-themed-styles";
import { PortalJustService } from "../core/api/portal-just";
import debounce from "lodash/debounce";
import { Dosar } from "../utils/types";

export const SearchFileScreen: React.FC = () => {
  const api = PortalJustService.getInstance();
  const styles = useThemedStyles(createStyles);

  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<Dosar[]>([]);
  const [recentFiles, setRecentFiles] = useState<Dosar[]>([]);

  const searchDosare = async (searchTerm: string) => {
    if (!searchTerm.trim()) {
      setSearchResults([]);
      return;
    }

    setLoading(true);
    try {
      const results = await api.searchDosare(searchTerm);
      setSearchResults(results);

      // If we got results, add the first one to recent files
      if (results.length > 0) {
        setRecentFiles((prev) => {
          const newRecent = [results[0], ...prev];
          // Keep only last 5 items
          return newRecent.slice(0, 5);
        });
      }
    } catch (error) {
      Alert.alert("Error", "Could not load results.");
    } finally {
      setLoading(false);
    }
  };

  // Debounce search to avoid too many API calls
  const debouncedSearch = useCallback(
    debounce((text: string) => searchDosare(text), 5000),
    [],
  );

  const handleSearchChange = (text: string) => {
    setSearchText(text);
    debouncedSearch(text);
  };

  const getDisplayedFiles = () => {
    if (searchText) {
      return searchResults;
    }
    return recentFiles;
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Search size={20} />
        <TextInput
          style={styles.searchInput}
          placeholder="Caută dosar după număr..."
          placeholderTextColor={"#B3C3E1"}
          value={searchText}
          onChangeText={handleSearchChange}
          autoCapitalize="none"
          autoCorrect={false}
        />
        {loading && <ActivityIndicator style={styles.loader} />}
      </View>

      <View style={styles.recentSection}>
        <Text style={styles.sectionTitle}>
          {searchText ? "Rezultate căutare" : "Dosare recente"}
        </Text>

        {getDisplayedFiles().length === 0 ? (
          <Text style={styles.noResults}>
            {searchText ? "Nu s-au găsit dosare" : "Nu există dosare recente"}
          </Text>
        ) : (
          getDisplayedFiles().map((file, index) => (
            <View key={index} style={styles.fileItem}>
              <View>
                <Text style={styles.fileNumber}>{file.numar}</Text>
                <Text style={styles.courthouse}>
                  {file.institutie} - {file.departament}
                </Text>
              </View>
              {file.sedinte && file.sedinte.length > 0 && (
                <View style={styles.statusBadge}>
                  <Text style={styles.statusText}>
                    {file.sedinte[file.sedinte.length - 1].solutieSumar ||
                      "În curs"}
                  </Text>
                </View>
              )}
            </View>
          ))
        )}
      </View>
    </View>
  );
};
