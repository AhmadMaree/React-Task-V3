type TTableColumn = {
    id: string;
    label: string;
    minWidth?: number;
    align?: 'right' | 'left' | 'center';
}
export type TResult = {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld?: string;
    films?: string[];
    species?: string[];
    vehicles?: string[];
    starships?: string[];
    created?: string;
    edited?: string;
    url?: string
}

type TData = {
    count: string;
    next: string | null;
    previous: string | null;
    results: TResult[];
}

export interface ICustomTableProps {
    columns: TTableColumn[];
    data: TData;
    pageSizeOptions?: number[];
    pageSize?: number;
    page?: number;
    title?: string;
    customStyles?: object;
    isError?: boolean;
    isLoading?: boolean;
    onPageChange: (newPage: number) => void;
    totalCount: number;
}