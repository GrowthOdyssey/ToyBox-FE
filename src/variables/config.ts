export const apiPath = '';

export const perPage = 40;

export const paginationLength = 5;

export const breakPoint = 768;

export const baseSize = {
  pc: {
    baseContainer: 1000,
    basePadding: 20,
  },
  sp: {
    baseContainer: 335,
    basePadding: 20,
  },
};

export const containerSize = {
  pc: baseSize.pc.baseContainer + baseSize.pc.basePadding * 2,
  sp: baseSize.sp.baseContainer,
};
