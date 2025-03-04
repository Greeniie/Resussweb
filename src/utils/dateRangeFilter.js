import { Button, Space, DatePicker } from "antd";
import { FaFilter } from "react-icons/fa";
import Highlighter from "react-highlight-words";
import moment from "moment";

export const getDateRangeFilterProps = ({
  dataIndex,
  searchInput,
  handleSearch,
  handleReset,
  setSearchedColumn,
  setSearchText,
  searchText,
  searchedColumn,
}) => ({
  filterDropdown: ({
    setSelectedKeys,
    selectedKeys,
    confirm,
    clearFilters,
  }) => (
    <div
      style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      <Space direction="vertical">
        <DatePicker.RangePicker
          value={selectedKeys[0]}
          onChange={(dates) => setSelectedKeys(dates ? [dates] : [])}
        />
      </Space>
      <Space>
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
          icon={<FaFilter size={12} />}
          size="small"
          style={{
            width: 90,
            display: "flex",
            gap: "0.3rem",
            alignItems: "center",
          }}
        >
          Filter
        </Button>
        <Button
          onClick={() => clearFilters && handleReset(clearFilters)}
          size="small"
          style={{
            width: 90,
          }}
        >
          Reset
        </Button>
      </Space>
    </div>
  ),
  filterIcon: (filtered) => (
    <FaFilter
      style={{
        color: filtered ? "#1890ff" : undefined,
      }}
    />
  ),
  onFilter: (value, record) => {
    const [startDate, endDate] = value || [];
    const recordDate = moment(record[dataIndex]);
    return (
      (!startDate || recordDate.isSameOrAfter(startDate, "day")) &&
      (!endDate || recordDate.isSameOrBefore(endDate, "day"))
    );
  },
  onFilterDropdownVisibleChange: (visible) => {
    if (visible) {
      setTimeout(() => searchInput.current?.select(), 100);
    }
  },
  render: (text) =>
    searchedColumn === dataIndex ? (
      <Highlighter
        highlightStyle={{
          backgroundColor: "#ffc069",
          padding: 0,
        }}
        searchWords={[searchText]}
        autoEscape
        textToHighlight={text ? text.toString() : ""}
      />
    ) : (
      text
    ),
});
