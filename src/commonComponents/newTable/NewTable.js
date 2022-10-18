import * as React from 'react';
import { utils as XLSXutils, writeFile as XLSXwriteFile } from 'xlsx';
import empty from 'is-empty';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import { visuallyHidden } from '@mui/utils';
import { Avatar, Divider, Hidden, Icon } from '@mui/material';
import { NewTableStyle } from './NewTableStyle';
import GlobalSearch from '../globalSearch/GlobalSearch';
import DropDownMenu from '../dropDownMenu/DropDownMenu';
import FormModal from '../formModal/FormModal';
import CloudIcon from '../../assets/cloud.png';
import upDownIcon from '../../assets/upDownIcon.png';
import CommonModal from '../commonModal/CommonModal';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import AddIcon from '@mui/icons-material/Add';
import UseWindowDimensions from '../../customHooks/UseWindowDimensions';
import moment from 'moment';
import { makeVar, useQuery, useReactiveVar } from '@apollo/client';
import { useLocation } from 'react-router-dom';
import {
  openModal,
  updateFlag,
  editData,
  userGroupData,
  editId,
  tabsPersmission
} from '../../lib/reactivities/reactiveVarables';
import { GET_EDIT_DATA } from '../../lib/queries/AllQueries';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
// export const openModal = makeVar(false);
// export const updateFlag = makeVar(false)
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}
function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    tableHeading,
    sx
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <NewTableStyle.Tablehead>
      <TableRow>
        <TableCell padding="checkbox">
          <NewTableStyle.Checkbox
            size="small"
            disableRipple
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts'
            }}
          />
        </TableCell>
        {tableHeading?.map((headCell, i) => {
          return (
            <TableCell
              key={headCell?.id}
              align={'left'}
              padding={'none'}
              sortDirection={orderBy === headCell?.id ? order : false}>
              <TableSortLabel
                active={orderBy === headCell?.id}
                direction={orderBy === headCell?.id ? order : 'asc'}
                onClick={createSortHandler(headCell?.id)}
                sx={{
                  marginLeft: headCell.id === 'action' ? headCell.marginLeft : 0,
                  fontSize: 12,
                  color: '#6D7D93'
                }}>
                {headCell.Label}
                {orderBy === headCell?.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          );
        })}
      </TableRow>
    </NewTableStyle.Tablehead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
  tableHeading: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      Label: PropTypes.string.isRequired
    })
  ).isRequired
};

const EnhancedTableToolbar = (props) => {
  const { width } = UseWindowDimensions();
  const { numSelected, toolBarTitle, handleAnchorClick, handleClickOpen, useTabsPermission } =
    props;
  // const permissions = state.tabsPersmission.map((items) => {
  const permissions = useTabsPermission.map((items) => {
    return items.pages;
  });
  const svgIcon = (
    <Icon>
      <img alt="edit" src={CloudIcon} width={20} height={20} />
    </Icon>
  );

  const csvExportButton = React.useRef()

  // Handle Table export
  const handleTableExport = () => {
    if(!props.exportTable || empty(props.exportTable.data)) {
      return console.log("No Data Provided");
    }
    let workBook = XLSXutils.book_new();
    let workSheet = XLSXutils.json_to_sheet(props.exportTable.data)
    XLSXutils.book_append_sheet(workBook, workSheet, props.exportTable.sheetname)
    XLSXwriteFile(workBook, `${props.exportTable.filename}.xlsx`)
  }

  const AddButton = ({ handleClickOpen }) => {
    return (
      <>
        {width > 600 ? (
          <NewTableStyle.AddButton
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={handleClickOpen}>
            Add
          </NewTableStyle.AddButton>
        ) : (
          <IconButton
            color="inherit"
            aria-label="search"
            disableFocusRipple
            disableRipple
            onClick={handleClickOpen}>
            <NewTableStyle.AddIcon />
          </IconButton>
        )}
      </>
    );
  };
  return (
    <>
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          justifyContent: 'space-between'
        }}>
        <Typography variant="h6" id="tableTitle" component="div">
          {toolBarTitle}
        </Typography>

        {numSelected > 0 ? (
          permissions.map((item) => {
            return item.DelPermission ? (
              <NewTableStyle.SelectedContainer>
                <NewTableStyle.Typography>{numSelected}&nbsp;selected</NewTableStyle.Typography>

                <Tooltip title="Delete">
                  <NewTableStyle.DelButton variant="outlined" startIcon={<DeleteIcon />}>
                    Delete
                  </NewTableStyle.DelButton>
                </Tooltip>
              </NewTableStyle.SelectedContainer>
            ) : (
              ''
            );
          })
        ) : (
          <div>
            {toolBarTitle === 'FAQS' ||
            toolBarTitle === 'Speakers' ||
            toolBarTitle === 'Course Batch' ||
            toolBarTitle === 'Course Category' ||
            toolBarTitle === 'Lectures' ? (
              ''
            ) : (
              <>
                {width > 600 ? (
                  <>
                    <NewTableStyle.FilterButton
                      variant="outlined"
                      startIcon={<FilterAltIcon />}
                      onClick={handleAnchorClick}>
                      Filter
                    </NewTableStyle.FilterButton>
                  </>
                ) : (
                  <>
                    <IconButton
                      color="inherit"
                      aria-label="search"
                      disableFocusRipple
                      disableRipple
                      // onClick={handleAnchorClick}
                    >
                      <NewTableStyle.FilterListIcon />
                    </IconButton>
                  </>
                )}
              </>
            )}



            <>
              {width > 600 ? (
                <>
                  <NewTableStyle.ExportButton
                    variant="outlined"
                    startIcon={svgIcon}
                    onClick={handleTableExport}
                  >
                    Export
                  </NewTableStyle.ExportButton>
                </>
              ) : (
                <>
                  <IconButton
                    color="inherit"
                    aria-label="search"
                    disableFocusRipple
                    disableRipple
                    onClick={handleTableExport}>
                    <Icon>
                      <img alt="edit" src={CloudIcon} width={23} height={22} />
                    </Icon>
                  </IconButton>
                </>
              )}
            </>

            {/* {
                                    state.user?.role === 'OWNER' ?
                                        <AddButton handleClickOpen={handleClickOpen} />
                                        :
                                        state.user?.role === 'ADMIN' ?
                                            toolBarTitle === "Courses" || toolBarTitle === "All Students" ?
                                                <></>
                                                :
                                                <AddButton handleClickOpen={handleClickOpen} />
                                            :
                                            <AddButton handleClickOpen={handleClickOpen} />
                                } */}
            {/* {
                                    permissions.map((items) => {
                                        return items.CreatePermission ? */}

            <AddButton handleClickOpen={handleClickOpen} />

            {/* :
                                            ''
                                    })
                                } */}
          </div>
        )}
      </Toolbar>
      <Divider />
    </>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  toolBarTitle: PropTypes.string.isRequired,
  handleAnchorClick: PropTypes.func.isRequired
};

const MobileSearchBar = (props) => {
  const { searchShow, setSearchShow, setSearchQuery } = props;
  return (
    <Hidden smUp>
      <>
        {searchShow && (
          <NewTableStyle.SearchBox>
            <GlobalSearch
              onChangeText={(val) => {
                setSearchQuery(val);
              }}
              placeholder="Search here..."
              searchCancel={() => {
                setSearchQuery('');
              }}
            />
            <IconButton
              size="small"
              disableFocusRipple
              disableRipple
              onClick={(val) => {
                setSearchShow(!searchShow);
                setSearchQuery('');
              }}>
              <NewTableStyle.CloseIconBox>
                <NewTableStyle.CloseIcon />
              </NewTableStyle.CloseIconBox>
            </IconButton>
          </NewTableStyle.SearchBox>
        )}
        {!searchShow && (
          <NewTableStyle.HeaderIconsContainer>
            <IconButton
              color="inherit"
              aria-label="search"
              disableFocusRipple
              disableRipple
              onClick={() => setSearchShow(!searchShow)}>
              <NewTableStyle.SearchIcon />
            </IconButton>
          </NewTableStyle.HeaderIconsContainer>
        )}
      </>
    </Hidden>
  );
};

export default function NewTable({
  title,
  tableHeadings,
  printedKeys,
  formInputs,
  filterdata,
  data,
  date,
  sx,
  // Handlers
  ctaFormHandler,
  // ctaDeleteHandler,
  ctaUpdateHandler,
  handleChange,
  disableAddIcon,
  onDateChange,
  exportTable = null,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [filterValue, setFilterValue] = React.useState('');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchShow, setSearchShow] = React.useState(false);
  const openAnchor = Boolean(anchorEl);

  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const useEditData = useReactiveVar(editData);
  const useUserGroupData = useReactiveVar(userGroupData);
  const useTabsPermission = useReactiveVar(tabsPersmission);
  const { data: EDIT_DATA, loading: EDIT_LOADING, editError } = useQuery(GET_EDIT_DATA);

  const handleAnchorClose = (value) => {
    setAnchorEl(null);
    setFilterValue(typeof value == 'object' ? filterValue : value);
  };
  //filter data for filters
  const filterDataArray = data?.filter((item) => {
    if (filterValue === '') {
      return item;
    } else if (filterValue === item.role) {
      return item;
    } else if (filterValue === item.status) {
      return item;
    } else if (filterValue === item.courseStatus) {
      return item;
    } else if (filterValue === item.eventStatus) {
      return item;
    } else if (filterValue === 'All') {
      return item;
    } else if (filterValue === item.feeStatus) {
      return item;
    } else if (filterValue === item.attendance) {
      return item;
    }
  });

  const AvatarBgColor = (note) => {
    if (
      note === 'a' ||
      note === 'e' ||
      note === 'i' ||
      note === 'm' ||
      note === 'q' ||
      note === 'u' ||
      note === '1' ||
      note === '5'
    ) {
      return { bg: '#FFEEEF', color: '#FF5963' };
    } else if (
      note === 'b' ||
      note === 'f' ||
      note === 'j' ||
      note === 'n' ||
      note === 'r' ||
      note === 'v' ||
      note === 'x' ||
      note === '2' ||
      note === '6' ||
      note === '9'
    ) {
      return { bg: '#E6F9F4', color: '#02C58F' };
    } else if (
      note === 'c' ||
      note === 'g' ||
      note === 'k' ||
      note === 'o' ||
      note === 's' ||
      note === 'w' ||
      note === 'y' ||
      note === '3' ||
      note === '7'
    ) {
      return { bg: '#FFF5EF', color: '#FF985F' };
    } else {
      return { bg: '#E8F3FF', color: '#1E86FF' };
    }
  };

  const handleClickOpen = () => {
    // dispatch({
    //   type: "setModal",
    //   payload: {
    //     openFormModal: true,
    //   },
    // });
    openModal(true);
  };

  //open edit form modal
  const ctaEditButtonHandler = (data) => {
    console.log('id in editButtonHandler', data);
    const test = useEditData;
    editId(data.id);
    openModal(true);
    updateFlag(true);
    formInputs.map((item) => {
      test[item.name] = data[item.name];
    });
    editData(test);
    if (
      data.role === 'ORGANIZATIONKEY' ||
      data.role === 'ADMIN' ||
      data.role === 'TEACHER' ||
      data.role === 'STUDENT'
    ) {
      userGroupData(data);
    }
  };

  //open dropDown panel
  const handleAnchorClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  //close dropDown panel
  const searchingFor = (searchQuery) => {
    return function (data) {
      return (
        data?.name?.toLowerCase().includes(searchQuery?.toLowerCase()) ||
        data?.email?.toLowerCase().includes(searchQuery?.toLowerCase()) ||
        data?.title?.toLowerCase().includes(searchQuery?.toLowerCase()) ||
        data?.courseName?.toLowerCase().includes(searchQuery?.toLowerCase()) ||
        data?.studentName?.toLowerCase().includes(searchQuery?.toLowerCase()) ||
        data?.city?.toLowerCase().includes(searchQuery?.toLowerCase()) ||
        data?.eventName?.toLowerCase().includes(searchQuery?.toLowerCase()) ||
        data?.faqQuestion?.toLowerCase().includes(searchQuery?.toLowerCase()) ||
        data?.speakerName?.toLowerCase().includes(searchQuery?.toLowerCase()) ||
        data?.coursesId?.toLowerCase().includes(searchQuery?.toLowerCase()) ||
        data?.lectureTitle?.toLowerCase().includes(searchQuery?.toLowerCase()) ||
        data?.id?.toLowerCase().includes(searchQuery?.toLowerCase())
      );
    };
  };
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = filterDataArray.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filterDataArray.length) : 0;

  // const permissions = state.tabsPersmission.map((items) => {
  const permissions = useTabsPermission.map((items) => {
    return items.pages;
  });

  //Permission Work
  // const location = useLocation();
  // const newArr = state.tabsPersmission.map((item) => item.pages.map((items) => {
  //     return items
  // }
  // ))

  // const obj = Object.fromEntries(newArr);
  // const arrSet = () => {
  //     setArr(newArr)
  // }

  // React.useEffect(() => {
  //     console.log(newArr)
  // }, [])

  // console.log("samiiiiii", arr)
  return (
    <Box sx={{ width: '100%' }}>
      {/* Drop Down menu for filter Button */}
      <DropDownMenu
        handleAnchorClose={handleAnchorClose}
        anchorEl={anchorEl}
        openAnchor={openAnchor}
        title={title}
        filterTag={filterdata.filterTag}
      />
      {/* Drop Down menu for filter Button */}

      {/* Form Modal */}
      <FormModal
        formInputs={formInputs}
        ctaFormHandler={ctaFormHandler}
        ctaUpdateHandler={ctaUpdateHandler}
        handleChange={handleChange}
        onDateChange={onDateChange}
        date={date}
      />
      {/* Form Modal */}
      <NewTableStyle.Paper>
        <EnhancedTableToolbar
          numSelected={selected.length}
          toolBarTitle={title}
          useTabsPermission={useTabsPermission}
          handleAnchorClick={handleAnchorClick}
          handleClickOpen={handleClickOpen}
          exportTable={exportTable}
        />

        <NewTableStyle.MobileViewTableHeader searchShow={searchShow} disableGutters>
          <NewTableStyle.PaginationContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              labelRowsPerPage={'Show'}
              component="div"
              count={filterDataArray.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              nextIconButtonProps={{ style: { display: 'none' } }}
              backIconButtonProps={{ style: { display: 'none' } }}
              labelDisplayedRows={({}) => ``}
              SelectProps={{
                style: {
                  borderWidth: 1,
                  border: '1px solid #E5EBF0',
                  borderRadius: 8,
                  justifyContent: 'center',
                  alignItems: 'center'
                }
              }}
              style={{
                display: searchShow && 'none',
                justifyContent: 'flex-start',
                width: '120px',
                marginLeft: -20,
                color: '#96A0B5'
              }}
            />
            <NewTableStyle.PaginationText>Enteries</NewTableStyle.PaginationText>
          </NewTableStyle.PaginationContainer>

          <Hidden smDown>
            <GlobalSearch
              placeholder="Search"
              onChangeText={(val) => {
                setSearchQuery(val);
              }}
              searchCancel={() => {
                setSearchQuery('');
              }}
            />
          </Hidden>

          <MobileSearchBar
            searchShow={searchShow}
            setSearchShow={setSearchShow}
            setSearchQuery={setSearchQuery}
          />
        </NewTableStyle.MobileViewTableHeader>

        <NewTableStyle.TableContainer>
          <NewTableStyle.Table aria-labelledby="tableTitle" size={'medium'}>
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={filterDataArray.length}
              tableHeading={tableHeadings}
              sx={sx}
            />
            <TableBody>
              {filterDataArray
                ?.slice()
                .sort(getComparator(order, orderBy))
                .filter(searchingFor(searchQuery))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <>
                      <TableRow
                        onClick={(event) => handleClick(event, row.id)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.name}
                        sx={{ height: 60, Width: 100 }}>
                        <TableCell padding="checkbox">
                          <NewTableStyle.Checkbox
                            onClick={(event) => handleClick(event, row.id)}
                            size="small"
                            checked={isItemSelected}
                            disableRipple
                            inputProps={{
                              'aria-labelledby': labelId
                            }}
                            selected={isItemSelected}
                          />
                        </TableCell>
                        {printedKeys?.map((subitem, subIndex) => {
                          const exactKey = row[subitem?.key];
                          return (
                            <>
                              <TableCell
                                component="th"
                                id={labelId}
                                scope="row"
                                padding="none"
                                key={subIndex + 10}>
                                {subitem?.type === 'modalQuestion' ? (
                                  <CommonModal question={row} />
                                ) : subitem?.type === 'modalAnswer' ? (
                                  <CommonModal answer={row} />
                                ) : subitem?.type === 'modalProfileUrl' ? (
                                  <CommonModal freelancingProfileUrl={row} />
                                ) : subitem?.type === 'modalPermissions' ? (
                                  <CommonModal modalPermissions={row} />
                                ) : subitem?.type === 'modalDescription' ? (
                                  <CommonModal modalDescription={row} />
                                ) : subitem?.type === 'image' ? (
                                  <>
                                    { row.eventImage || row.imageUrl || row.spekaerImage ? (
                                      <NewTableStyle.Image alt={"Invalid URL"}  src={exactKey} />
                                    ) : (
                                      <p>No Image</p>
                                    )}
                                  </>
                                ) : subitem?.type === 'editor' ? (
                                  <p
                                    dangerouslySetInnerHTML={{
                                      __html: exactKey
                                    }}></p>
                                ) : subitem?.type === 'crud' ? (
                                  <>
                                    <NewTableStyle.IconDiv>
                                      {/* <Tooltip title="Delete">
                                                            <CommonConfirmModal ctaDeleteHandler={ctaDeleteHandler} row={row} title={title} />
                                                        </Tooltip> */}
                                      {/* {
                                                                                                        newArr.pageURL === location.pagename ?
                                                                                                            newArr.EditPermission ?
                                                                                                                
                                                                                                                :
                                                                                                                null
                                                                                                            :
                                                                                                            null
                                                                                                    } */}
                                      <Tooltip title="Update">
                                        <IconButton
                                          aria-label="update"
                                          size="small"
                                          onClick={() => ctaEditButtonHandler(row)}>
                                            <div style={{
                                              width:'100%',
                                            }}>
                                            <NewTableStyle.EditIcon style={{width:"22px"}}/>

                                            </div>
                                        </IconButton>
                                      </Tooltip>

                                      <Tooltip title="Enable" >
                                      <IconButton 
                                      aria-label="enable"
                                      size="small" >
                                        <div style={{
                                              width:'100%',
                                            }}>
                                      <NewTableStyle.CheckCircleIcon style={{width:"22px"}}/>

                                      </div>
                                      </IconButton>
                                      </Tooltip>

                                      <Tooltip title="Disable">
                                      <IconButton 
                                      aria-label="disable"
                                      size="small" >
                                        <div style={{
                                              width:'100%',
                                            }}>
                                      <NewTableStyle.DoDisturbIcon style={{width:"22px"}}/>

                                      </div>
                                      </IconButton>
                                      </Tooltip>
                                    </NewTableStyle.IconDiv>

                                  </>
                                ) : subitem.key === 'role' || subitem.key === 'status' ? (
                                  <NewTableStyle.Role
                                    variant="outlined"
                                    bgColor={AvatarBgColor(exactKey[0]?.toLowerCase())?.bg}
                                    Color={AvatarBgColor(exactKey[0]?.toLowerCase())?.color}>
                                    {exactKey}
                                  </NewTableStyle.Role>
                                ) : subitem.key === 'name' ? (
                                  <NewTableStyle.AvatarBox>
                                    <NewTableStyle.Avatar
                                      bgColor={AvatarBgColor(exactKey[0]?.toLowerCase())?.bg}
                                      Color={AvatarBgColor(exactKey[0]?.toLowerCase())?.color}>
                                      {exactKey[0]?.toUpperCase()}
                                    </NewTableStyle.Avatar>
                                    <NewTableStyle.EmailNameContainer>
                                      <NewTableStyle.PTagName>{exactKey}</NewTableStyle.PTagName>
                                      <NewTableStyle.PTagEmail>{}</NewTableStyle.PTagEmail>
                                    </NewTableStyle.EmailNameContainer>
                                  </NewTableStyle.AvatarBox>
                                ) : subitem.key === 'createdAt' || subitem.key === 'updateAt' ? (
                                  <NewTableStyle.PTime>
                                    {moment(exactKey).format('DD-MMM-YY hh:mm A')}
                                  </NewTableStyle.PTime>
                                ) : (
                                  exactKey
                                )}
                              </TableCell>
                            </>
                          );
                        })}
                      </TableRow>
                    </>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows
                  }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </NewTableStyle.Table>
        </NewTableStyle.TableContainer>
      </NewTableStyle.Paper>
    </Box>
  );
}
