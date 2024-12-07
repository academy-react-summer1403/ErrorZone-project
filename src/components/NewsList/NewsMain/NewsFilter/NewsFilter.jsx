import React, { useEffect, useState } from "react";
import SearchBox from "../../../common/SearchBox/SearchBox";
import { CellsIcon, FilterRemoveIcon, Search01Icon } from "hugeicons-react";
import AutoCompleteSpecial from "../../../common/AutoCompleteSpecial/AutoCompleteSpecial";
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  DateRangePicker,
  Input,
} from "@nextui-org/react";
import { getQuery } from "../../../../core/services/api/reactQuery/getQuery";
import { usequery } from "../../../../core/services/api/reactQuery/useQuery";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { giveNewsCategoryId, searchNews } from "../../../../redux/newsSortFilDataSlice";
import { I18nProvider } from "@react-aria/i18n";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { parseAbsoluteToLocal } from "@internationalized/date";
import PersianDateRange from "./PersianDateRange";
import { makeDatePersian } from "../../../../core/utils/date-helper.utils";
import ButtonSpecial from "../../../common/ButtonSpecial";

const NewsFilter = () => {
  const [value, setValue] = React.useState();
  const [dateRange, setDateRange] = useState([null, null]);

  // let [date, setDate] = React.useState({
  //   start: parseAbsoluteToLocal("2021-04-01T18:45:22Z"),
  //   end: parseAbsoluteToLocal("2021-04-14T19:15:22Z"),
  // });
  const dispatch = useDispatch();

  const categories = [
    { label: "دسته بندی نابغه", value: 19 },
    { label: "اخبار پژوهشگاه", value: 1 },
    { label: "علمی2", value: 2 },
  ];

  useEffect(() => {
    dispatch(giveNewsCategoryId(value));
  }, [value]);

  return (
    <div className="flex mx-auto w-full ">
      <div className="space-y-6 mx-auto ">
        <div className="flex justify-between"> 
        <span className="font-DanaFaNum-700 text-2xl  "> فیلتر </span>

        <ButtonSpecial
          className="bg-red rounded-3xl py-2 text-white"
          onClick={() => {
            dispatch(giveNewsCategoryId(""));
            dispatch(searchNews(""));
 
          }}
          innerHtml={
            <>
              <FilterRemoveIcon />
              <span>حذف </span>
            </>
          }
        />
       </div>

        <div className=" space-y-2    ">
          <div className="   flex ">
            <Search01Icon />
            <span>جستوجو</span>
          </div>
          <div className="m-auto w-full pt-0 ">
            <SearchBox />
          </div>
        </div>

        <div className=" space-y-2    ">
          <div className="   flex  ">
            <CellsIcon />
            <span>دسته بندی</span>
          </div>
          <div className=" pt-0 ">
            <div className="flex max-w-xs flex-col gap-2">
              <Autocomplete
                label="دسته مورد نظر را انتخاب کنید"
                variant="faded"
                defaultItems={categories}
                className="max-w-xs"
                selectedKey={value}
                onSelectionChange={setValue}
                radius="lg"
              >
                {(item) => (
                  <AutocompleteItem key={item.value}>
                    {item.label}
                  </AutocompleteItem>
                )}
              </Autocomplete>
            </div>
          </div>
        </div>

        <div className=" space-y-2    ">
          <div className="   flex   ">
            <CellsIcon />
            <span>تاریخ انشار</span>
          </div>
          <div className=" pt-0 ">
            <div className="flex max-w-xs flex-col gap-2">
              <div className="flex flex-col gap-4">
                <PersianDateRange value={dateRange} onChange={setDateRange} />
                {/* <I18nProvider locale="fa">
                  <DateRangePicker
                    label="Stay duration"
                    value={date}
                    onChange={setDate}
                  />
                </I18nProvider> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFilter;
