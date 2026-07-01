import { c_grey_six, c_grey_two, c_white } from "../../../constants/colors";

import formatKey from "../../../utils/filter/format-key";
import formatValue from "../../../utils/filter/format-value";
import clearFormField from "../../../utils/filter/clear-form-field";
import filterFieldsVerifier from "../../../utils/filter/filter-fields-verifier";

import type { FilterFormState } from "../../../interfaces/states/filter-form-state";

import XCirculeContainedSvg from "../../../../assets/svg/icons/x-circle-contained";

import { Container, Key, KeyContainer, Remover, Scope, Title, Value, ValueContainer } from "./styles";

interface Props {
    formState: FilterFormState,
    setFormState: React.Dispatch<React.SetStateAction<FilterFormState>>
}

const SelectedFilter = (props: Props) => {

    const { formState, setFormState } = props;

    return (
        <Container>
            <Title color={c_grey_six}>Filtros Aplicados:</Title>
            <Scope>
                {Object.entries(formState).map(([key, value]) => (filterFieldsVerifier(value)
                    && <KeyContainer key={key} backgroundColor={c_white}>
                        <Key color={c_grey_six}>{formatKey(key)}:</Key>
                        {Array.isArray(value)
                            ? value.length > 0
                                ? value.every(item => typeof item === "object" && item !== null)
                                    ? <ValueContainer>{
                                        value.map((item, index) => (
                                            <Value key={index} backgroundColor={c_grey_two}>
                                                {formatValue(item.label)}
                                            </Value>
                                        ))
                                    }
                                    </ValueContainer>
                                    : <ValueContainer>
                                        {value.map((item, index) => (
                                            <Value key={index} backgroundColor={c_grey_two}>
                                                {formatValue(item)}
                                            </Value>
                                        ))}
                                    </ValueContainer>
                                : null
                            : <Value key={key} backgroundColor={c_grey_two}>
                                {formatValue(value)}
                            </Value>
                        }
                        {(key != 'listOption')
                            && <Remover onClick={() => setFormState(
                                (prevState) => ({ ...prevState, [key]: clearFormField(value) })
                            )}>
                                <XCirculeContainedSvg />
                            </Remover>
                        }
                    </KeyContainer>
                ))}
            </Scope>
        </Container>
    );
}

export default SelectedFilter;