/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery, type UseQueryOptions, useInfiniteQuery, type UseInfiniteQueryOptions } from "@tanstack/react-query";
import { useClient } from '../useClient';

export default function useForestForest() {
  const client = useClient();
  const QueryParams = ( options: any) => {
    const key = { type: 'QueryParams',  };    
    return useQuery([key], () => {
      return  client.ForestForest.query.queryParams().then( res => res.data );
    }, options);
  }
  
  const QuerySayHello = (name: string,  options: any) => {
    const key = { type: 'QuerySayHello',  name };    
    return useQuery([key], () => {
      const { name } = key
      return  client.ForestForest.query.querySayHello(name).then( res => res.data );
    }, options);
  }
  
  const QuerySay = (name: string,  options: any) => {
    const key = { type: 'QuerySay',  name };    
    return useQuery([key], () => {
      const { name } = key
      return  client.ForestForest.query.querySay(name).then( res => res.data );
    }, options);
  }
  
  return {QueryParams,QuerySayHello,QuerySay,
  }
}
