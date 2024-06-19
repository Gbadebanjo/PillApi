// PAGINATION
const getPagination = (page, size) => {
    const limit = size ? +size : 20;
    const offset = page ? (page - 1) * limit : 0;

    return { limit, offset };
};

const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows: products } = data;
    const currentPage = page ? +page : 1;
    const totalPages = Math.ceil(totalItems / limit);
    return { totalItems, products, totalPages, currentPage };
};

const getReqPagination = (req) => {
    let { page, size } = req.query
    page = Number(page || 1)
    size = Number(size || 20)

    return { page, size };
};

const getOffsetLimit = (pagination) => {
    const { page, size } = pagination
    return {
        limit: size,
        offset: (page - 1) * size
    }
}

const updatePagination = (pagination, totalItems) => {
    const {page, size} = pagination
    return {
        page,
        size,
        totalItems,
        totalPages: Math.ceil(totalItems / size) || 1
    }
}

const paginateOptions = (req) => {
    const page = req?.query.page || 1;
    const perPage = req?.query.perPage || 15;
    return {
      limit: perPage,
      offset: (page - 1) * perPage,
    };
  };

  module.exports = {
    paginateOptions,
    updatePagination,
    getOffsetLimit,
    getReqPagination,
    getPagingData,
    getPagination
  }