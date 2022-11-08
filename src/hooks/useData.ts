import { useState, useEffect, useCallback } from "react";
import {
  getCategoryTypes,
  getEntriesByCategory,
  VideoProgramType,
  VideoEntryType,
} from "~/lib/content-api";

interface StateType<T> {
  loading: boolean;
  error?: null | string;
  data: T;
}

export function useCategories() {
  const [state, setState] = useState<StateType<string[]>>({
    loading: false,
    error: null,
    data: [],
  });

  const fetchData = useCallback(() => {
    setState(() => ({ loading: true, error: null, data: [] }));
    getCategoryTypes()
      .then((data) => {
        setState((s) => ({ ...s, loading: false, data }));
      })
      .catch((e: Error) => {
        setState(() => ({ loading: false, error: e.message, data: [] }));
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return { state, fetchData };
}

export function useEntriesByCategory() {
  const [state, setState] = useState<StateType<VideoEntryType[]>>({
    loading: true,
    error: null,
    data: [],
  });

  const fetchData = useCallback((cat: VideoProgramType) => {
    setState(() => ({ loading: true, error: null, data: [] }));
    getEntriesByCategory(cat)
      .then((data) => {
        setState((s) => ({ ...s, loading: false, data }));
      })
      .catch((e: Error) => {
        setState(() => ({ loading: false, error: e.message, data: [] }));
      });
  }, []);

  return { state, fetchData };
}
