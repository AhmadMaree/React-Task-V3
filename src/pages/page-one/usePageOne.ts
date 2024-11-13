import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useGetStarWars } from "../../api/request";

const usePageOne = () => {

    const pageSize = 10
    const [page, setPage] = useState<number>(0);
    const [searchValue, setSearchValue] = useState<string>('')

    const { data, isLoading, isError, isFetching } = useGetStarWars({ page, search: searchValue });

    const { register, handleSubmit } = useForm<{ name: string }>();

    const onSearch = handleSubmit(({ name }: { name: string }) => {
        setSearchValue(name);
        setPage(0);
    });

    useEffect(() => {
        if (!data) return
        const maxPage = Math.floor(data?.count / pageSize);
        if (page > maxPage) {
            setPage(0); // Reset to first page if current page is out of range
        }
    }, [data, page, pageSize]);

    const onPageChange = (newPage: number) => {
        setPage(newPage)
    }

    const columns = [
        { id: 'name', label: 'Name', minWidth: 50 },
        { id: 'gender', label: 'Gender', minWidth: 50 },
        { id: 'height', label: 'Height', minWidth: 50 },
        { id: 'eye_color', label: 'Eye Color', minWidth: 50 },
        { id: 'details', label: '', minWidth: 70 },
    ];
    return {
        onSearch,
        register,
        onPageChange,

        columns,
        data,
        isLoading,
        isError,
        isFetching,
        page,
        pageSize,
    }
}

export default usePageOne;