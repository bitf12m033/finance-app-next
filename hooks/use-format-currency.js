import React, { useMemo } from 'react'

const useFormatCurrency = (amount) => {
    const formatCurrency = (amount) => {
        return Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(amount);
        
    }
    return useMemo(() => formatCurrency(amount), [amount])
}

export default useFormatCurrency