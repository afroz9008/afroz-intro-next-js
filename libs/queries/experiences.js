export const GET_EXP_QUERY = `*[_type=="experience"]{
    present,
    degree,
    description,
    startDate,
    endDate,
    _createdAt
}`;
