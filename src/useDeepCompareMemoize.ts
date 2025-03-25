import React from 'react';
import isEqual from 'react-fast-compare';

export function useDeepCompareMemoize(dependencies: React.DependencyList) {
  const dependenciesRef = React.useRef<React.DependencyList>(dependencies);
  const signalRef = React.useRef<number>(0);

  if (!isEqual(dependencies, dependenciesRef.current)) {
    dependenciesRef.current = dependencies;
    signalRef.current += 1;
  }

  return React.useMemo(() => dependenciesRef.current, [signalRef.current]);
}
