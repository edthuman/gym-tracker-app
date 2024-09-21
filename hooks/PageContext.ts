import { CurrentPage, SetCurrentPage } from '@/types';
import React, { createContext } from 'react';

type PageProps = {
    page: CurrentPage,
    setPage?: SetCurrentPage
}


const PageContext = createContext<PageProps>({
    page: "Home"
})

export default PageContext