import { SetPage } from '@/types';
import { createContext } from 'react';

type PageProps = {
    page: string,
    setPage?: SetPage
}

const PageContext = createContext<PageProps>({
    page: "Home"
})

export default PageContext