export const getPagi = (page, size) => {
    const limit= +size;

    const offset = page * limit;
    
    return {limit, offset};

}