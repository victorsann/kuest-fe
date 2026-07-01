import { c_grey_six, c_grey_two, c_white } from "../../../constants/colors";

import type { FilterFormState } from "../../../interfaces/states/filter-form-state";
import { filterFieldsVerifier } from "../../../utils/filter-fields-verifier";

import XCirculeContainedSvg from "../../../../assets/svg/icons/x-circle-contained";

import { Container, Key, KeyContainer, Remover, Scope, Title, Value, ValueContainer } from "./styles";

interface Props {
    formState: FilterFormState,
    setFormState: React.Dispatch<React.SetStateAction<FilterFormState>>
}

const SelectedFilter = (props: Props) => {

    const { formState } = props;

    return (
        <Container>
            <Title color={c_grey_six}>Filtros Aplicados:</Title>
            <Scope>
                {Object.entries(formState).map(([key, value]) => (
                    filterFieldsVerifier(value)
                        ? <KeyContainer key={key} backgroundColor={c_white}>
                            <Key color={c_grey_six}>{key}:</Key>
                            {Array.isArray(value)
                                ? value.length > 0
                                    ? value.every(item => typeof item === "object" && item !== null)
                                        ? <ValueContainer>{
                                            value.map((item, index) => (
                                                <Value key={index} backgroundColor={c_grey_two}>
                                                    {item.label}
                                                </Value>
                                            ))
                                        }
                                        </ValueContainer>
                                        : <ValueContainer>{
                                            value.map((item, index) => (
                                                <Value key={index} backgroundColor={c_grey_two}>
                                                    {item}
                                                </Value>
                                            ))
                                        }
                                        </ValueContainer>
                                    : null
                                : <Value key={key} backgroundColor={c_grey_two}>{value}</Value>
                            }
                            <Remover onClick={() => { }}>
                                <XCirculeContainedSvg />
                            </Remover>
                        </KeyContainer>
                        : null
                ))}
            </Scope>
        </Container>
    );
}

export default SelectedFilter;