import { useState, useEffect } from 'react';

export const useLazyLoading = (data, itemsPerPage = 6) => {
  const [visibleItems, setVisibleItems] = useState(itemsPerPage);
  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleItems(prev => prev + itemsPerPage);
      setLoading(false);
    }, 500);
  };

  const hasMore = visibleItems < data.length;

  return {
    visibleItems: data.slice(0, visibleItems),
    loadMore,
    hasMore,
    loading,
  };
};