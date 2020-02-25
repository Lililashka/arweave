import { useState } from "react"
import Select, { OptionTypeBase } from 'react-select';

type Props = {
  callback?: Function
}

const CategoryFilterInput: React.FunctionComponent<Props> = ({
  callback = null
}) => {
  const [selectedOption, setSelectedOption] = useState<OptionTypeBase>({ value: 'all', label: 'all categories' });
  const options = [
    { value: 'all', label: 'all categories' },
    { value: 'community', label: 'community' },
    { value: 'ecosystem', label: 'ecosystem' },
    { value: 'announcement', label: 'announcements' },
  ]

  function handleChange(option: any) {
    setSelectedOption(option)
    if (callback) callback(option.value)
  };

  return (
    <Select
      className="my-select-input"
      classNamePrefix="my-select-input"
      isSearchable={false}
      value={selectedOption}
      onChange={handleChange}
      options={options}
    />
  )
}


export default CategoryFilterInput