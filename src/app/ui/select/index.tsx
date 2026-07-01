import { useEffect, useRef, useState } from "react";
import { c_grey_six, c_white } from "../../constants/colors";

import ChevroDownSvg from "../../../assets/svg/icons/chevron-down";
import ChevroUpSvg from "../../../assets/svg/icons/chevron-up";

import type { SelectItemModel } from "../../interfaces/models/select-item-model";

import TextInput from "../text-input";

import { CheckBox, Container, Control, EmptyList, Label, List, Option, Placeholder, SeachBar } from "./style";

interface Props {
    options: Array<SelectItemModel>,
    value: Array<SelectItemModel>,
    multiple?: boolean;
    placeholder?: string;
    showSearchbar?: boolean;
    onChange: (params: any) => void;
}

const Select = (props: Props) => {

    const { options, value, multiple, placeholder, showSearchbar, onChange } = props;

    const [open, setOpen] = useState(false);
    const [selectedLabels, setSeletedLabels] = useState<Array<SelectItemModel>>([]);

    useEffect(() => {
        if (value.length > 0) setSeletedLabels(value);
    }, [value]);

    useEffect(() => onChange(selectedLabels), [selectedLabels]);

    // Related to selecting option
    const toggleOption = (option: SelectItemModel) => {
        if (multiple) {
            if (selectedLabels.includes(option)) {
                setSeletedLabels(selectedLabels.filter(item => item !== option));
            } else {
                setSeletedLabels([...selectedLabels, option]);
            }
        } else {
            if (selectedLabels.includes(option)) {
                setSeletedLabels(selectedLabels.filter(item => item !== option));
            } else {
                setSeletedLabels([option]);
            }
        }
    };

    // Related to opening and closing
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    // Related to searching 

    const [searchValue, setSearchValue] = useState('');
    const [foundList, setFoundList] = useState<Array<SelectItemModel>>([]);

    useEffect(() => setFoundList(options), [options]);

    const handleSeachOption = (text: string) => {

        setSearchValue(text);

        if (text.trim() !== '') {
            const normalizedText = text.replace(/\s/g, "").toLowerCase();
            let list = options?.filter(
                (option) => option?.label?.replace(/\s/g, "").toLowerCase().includes(normalizedText)
            );
            setFoundList(list);
        } else {
            setFoundList(options);
        }
    }

    return (
        <Container ref={ref}>
            <Control onClick={() => setOpen(!open)}>
                <Placeholder color={c_grey_six}>{placeholder}</Placeholder>
                {(open) ? <ChevroUpSvg /> : <ChevroDownSvg />}
            </Control>
            {open && (
                <List backgroundColor={c_white}>
                    {(showSearchbar == true)
                        ? <SeachBar>
                            <TextInput
                                value={searchValue}
                                placeholder="Buscar..."
                                onChange={handleSeachOption}
                            />
                        </SeachBar>
                        : null
                    }
                    {(foundList.length > 0)
                        ? foundList.map(option => (
                            <Option
                                key={option.value}
                                backgroundColor={c_white}
                                onClick={() => toggleOption(option)}
                            >
                                <CheckBox
                                    readOnly
                                    type="checkbox"
                                    checked={selectedLabels.includes(option)}
                                />
                                <Label color={c_grey_six}>{option.label}</Label>
                            </Option>
                        ))
                        : <EmptyList color={c_grey_six}>Nenhum item encontrado</EmptyList>
                    }
                </List>
            )}
        </Container>

    )
};

export default Select;