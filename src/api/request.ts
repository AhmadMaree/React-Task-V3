import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface IUseGetStarWarsProps {
    page: number;
    search: string;
}

export const useGetStarWars = ({ page, search }: IUseGetStarWarsProps) => {
    const queryKey = useMemo(() => ['starWarsPeople', page, search], [page, search]);

    const fetchStarWarsPeople = async () => {
        const { data } = await axios.get('https://swapi.dev/api/people/', {
            params: { page: page + 1, search },
        });
        return data;
    };

    const { data, isError, isLoading, isFetching } = useQuery(
        {
            queryKey,
            queryFn: fetchStarWarsPeople,
        }
    );

    return { data, isError, isLoading, isFetching };
}