import { Page, SetPage } from '@/types';
import { createContext } from 'react';

type PageProps = {
    page: Page,
    setPage?: SetPage
}


const PageContext = createContext<PageProps>({
    page: "Home"
})

export default PageContext