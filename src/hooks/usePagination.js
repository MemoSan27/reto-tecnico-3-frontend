

export const usePagination = (page, setPage) => {
    
    const handlePrev = () => {
        window.scrollTo(0,0);
        setPage(page - 1);
    }

    const handleNext = () => {
        window.scrollTo(0,0);
        setPage(page + 1);
    }

    return{
        handlePrev,
        handleNext,
    }
}
