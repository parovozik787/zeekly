import metricsData from '../data/metricsData.json';
import { Metric } from '../components/MetricsBlock/types';

export const fetchMetricsData = (): Promise<Metric[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(metricsData);
    }, 1000);
  });
};
