import useSWR from 'swr'

const fetcher = async (...args) => {
    const res = await fetch(...args);
    const data = await res.json();
    return data.cart;
}

const useCart = () => {
    const {
        data: cart = [],
        error,
        isLoading,
        isValidation,
        mutate

    } = useSWR('/api/cart', fetcher);
    return {
        cart,
        error,
        isValidation,
        isLoading,
        mutate,
    }
}


export default useCart;