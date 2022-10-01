import * as React from 'react';

import { Search, SearchIconWrapper, StyledInputBase } from './GlobalSearchStyle';
import SearchIcon from '@mui/icons-material/Search'
export default function GlobalSearch(props) {
  return (
    <>
      <Search style={{ backgroundColor: 'white' }}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>

        <StyledInputBase
          placeholder={props.placeholder}
          inputProps={{ 'aria-label': 'search' }}
          onChange={(e) => props?.onChangeText(e.target.value)}
        />
      </Search>
    </>
  );
}
