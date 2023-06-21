import {
  PaginationWrapperStyled,
  SelectWrapperStyled,
  PageSwitchStyled,
} from "./Pagination.styled";

type PaginationProps = {
  pageSize: number;
  onPageSizeChange: (pageSize: number) => void;
  page: number;
  goBack: () => void;
  goForward: () => void;
  currentElementCount: number;
};

export const Pagination = ({
  pageSize,
  onPageSizeChange,
  page,
  goBack,
  goForward,
  currentElementCount,
}: PaginationProps) => {
  return (
    <PaginationWrapperStyled>
      <SelectWrapperStyled>
        <label htmlFor="results-per-page">Results per page:</label>
        <select
          id="results-per-page"
          value={pageSize}
          onChange={(event) => onPageSizeChange(parseInt(event.target.value))}
        >
          <option value="12">12</option>
          <option value="24">24</option>
          <option value="36">36</option>
        </select>
      </SelectWrapperStyled>
      <PageSwitchStyled>
        <button onClick={goBack} disabled={page < 2}>
          {"<"}
        </button>
        <div>{page}</div>
        <button onClick={goForward} disabled={currentElementCount < pageSize}>
          {">"}
        </button>
      </PageSwitchStyled>
    </PaginationWrapperStyled>
  );
};
