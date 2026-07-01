import { useEffect, useState } from "react";

import FormField from "../form-field";
import TextInput from "../text-input";
import Row from "../../components/row_styles";
import SquareButton from "../button/square-button";

import Select from "../select";

import { c_dark_blue, c_grey_six, c_grey_two, c_white } from "../../constants/colors";

import type { SubjectEntity } from "../../interfaces/entities/subject-entity";
import type { TopicEntity } from "../../interfaces/entities/topic-entity";
import type { BoardEntity } from "../../interfaces/entities/board-entity";
import type { RoleEntity } from "../../interfaces/entities/role-entity";
import type { ExamEntity } from "../../interfaces/entities/exam-entity";

import getYearsList from "../../utils/get-years-list";

import type { FilterFormState } from "../../interfaces/states/filter-form-state";

import { ListingOptionsEnum } from "../../constants/enum/filter/listing-options.enum";
import { ExceptionOptionsEnum } from "../../constants/enum/filter/exception-options.enum";

import { CheckBox, Col, Container, Label, Section } from "./styles";
import SelectedFilter from "./selected-fields";

const Filter = () => {

    const [subjects, setSubjects] = useState<Array<SubjectEntity>>([]);
    const [topics, setTopics] = useState<Array<TopicEntity>>([]);
    const [boards, setBoards] = useState<Array<BoardEntity>>([]);
    const [roles, setRoles] = useState<Array<RoleEntity>>([]);
    const [exams, setExams] = useState<Array<ExamEntity>>([]);
    const [years, setYears] = useState<Array<any>>([]);

    const handleLoadFormFields = () => {
        setSubjects([
            { value: '0', label: 'Matemática' },
            { value: '1', label: 'Direito Penal' },
            { value: '2', label: 'Direito Processual Penal' },
        ]);
        setTopics([{ value: '0', label: 'Porcentagem' }]);
        setBoards([{ value: '0', label: 'CESPE / CEBRASPE' }]);
        setRoles([{ value: '0', label: 'Oficial Investigador de Polícia' }]);
        setExams([{ value: '0', label: 'Polícia Civil' }]);
        setYears(getYearsList(30));
    }

    const listingOptions = [ListingOptionsEnum.ALL, ListingOptionsEnum.SOLVED, ListingOptionsEnum.RIGHT, ListingOptionsEnum.WRONG];
    const exceptionOptions = [ExceptionOptionsEnum.ANNULLED, ExceptionOptionsEnum.OUTDATED];

    // Related to form state
    useEffect(() => {
        handleLoadFormFields();
    }, []);

    const [formState, setFormState] = useState<FilterFormState>({
        keyWord: '',
        subjects: [],
        topics: [],
        boards: [],
        roles: [],
        exams: [],
        years: [],
        exceptions: [],
        listOption: ListingOptionsEnum.ALL
    });

    const handleClearFilter = () => setFormState({ keyWord: '', subjects: [], topics: [], boards: [], roles: [], exams: [], years: [], exceptions: [], listOption: ListingOptionsEnum.ALL });

    return (
        <Container backgroundColor={c_grey_two}>
            <Section>
                <Col>
                    <FormField
                        label="Palavra Chave"
                        child={
                            <TextInput
                                value={formState.keyWord}
                                placeholder="Buscar por palavra chave"
                                onChange={(_text) => setFormState((prevState) => ({
                                    ...prevState, keyWord: _text
                                }))}
                            />
                        }
                    />
                    <Row gap="15px">
                        <FormField
                            label="Disciplina"
                            child={
                                <Select
                                    value={formState.subjects}
                                    multiple={true}
                                    options={subjects}
                                    showSearchbar={true}
                                    placeholder="Adicionar disciplina"
                                    onChange={(_subjects) => setFormState((prevState) => ({
                                        ...prevState, subjects: _subjects
                                    }))}
                                />
                            }
                        />
                        <FormField
                            label="Assunto"
                            child={
                                <Select
                                    value={formState.topics}
                                    multiple={true}
                                    options={topics}
                                    showSearchbar={true}
                                    placeholder="Adicionar assunto"
                                    onChange={(_topics) => setFormState((prevState) => ({
                                        ...prevState, topics: _topics
                                    }))}
                                />
                            }
                        />
                    </Row>
                    <Row gap="15px">
                        <FormField
                            label="Banca"
                            child={
                                <Select
                                    value={formState.boards}
                                    multiple={true}
                                    options={boards}
                                    showSearchbar={true}
                                    placeholder="Adicionar banca"
                                    onChange={(_boards) => setFormState((prevState) => ({
                                        ...prevState, boards: _boards
                                    }))}
                                />
                            }
                        />
                        <FormField
                            label="Cargo"
                            child={
                                <Select
                                    value={formState.roles}
                                    multiple={true}
                                    options={roles}
                                    showSearchbar={true}
                                    placeholder="Adicionar cargo"
                                    onChange={(_roles) => setFormState((prevState) => ({
                                        ...prevState, roles: _roles
                                    }))}
                                />
                            }
                        />
                    </Row>
                </Col>
                <Col>
                    {/*  */}
                    <FormField
                        label="Listar questões"
                        style={{ backgroundColor: 'transparent' }}
                        child={
                            <Row gap="10px">
                                {listingOptions.map((item) =>
                                    <SquareButton
                                        text={
                                            item == ListingOptionsEnum.ALL
                                                ? 'Todas'
                                                : item == ListingOptionsEnum.SOLVED
                                                    ? 'Resolvidas'
                                                    : item == ListingOptionsEnum.RIGHT
                                                        ? 'Acertos'
                                                        : 'Erros'
                                        }
                                        isActive={true}
                                        backgroundColor={'transparent'}
                                        color={(formState.listOption == item) ? c_dark_blue : c_grey_six}
                                        borderColor={(formState.listOption == item) ? c_dark_blue : c_grey_six}
                                        onClick={() => setFormState((prevState) => ({
                                            ...prevState, listOption: (formState.listOption == item)
                                                ? ListingOptionsEnum.NONE : item
                                        }))}
                                    />
                                )}
                            </Row>
                        }
                    />
                    <FormField
                        label="Excluir"
                        style={{ backgroundColor: 'transparent' }}
                        child={
                            <Row gap="20px">
                                {exceptionOptions.map((item) =>
                                    <Row gap="5px">
                                        <CheckBox
                                            readOnly
                                            type="checkbox"
                                            backgroundColor={c_white}
                                            accentColor={c_dark_blue}
                                            checked={formState.exceptions.includes(item)
                                                ? true : false
                                            }
                                            onClick={() => setFormState((prevState) => ({
                                                ...prevState,
                                                exceptions: formState.exceptions.includes(item)
                                                    ? formState.exceptions.filter(i => i !== item)
                                                    : [...formState.exceptions, item]
                                            }))}
                                        />
                                        <Label color={c_grey_six}>
                                            {(item == ExceptionOptionsEnum.ANNULLED)
                                                ? 'Questões anuladas'
                                                : 'Questões desatualizadas'
                                            }
                                        </Label>
                                    </Row>
                                )}
                            </Row>
                        }
                    />
                    <Row gap="15px">
                        <FormField
                            label="Concurso"
                            child={
                                <Select
                                    value={formState.exams}
                                    multiple={true}
                                    options={exams}
                                    showSearchbar={true}
                                    placeholder="Adicionar concurso"
                                    onChange={(_exams) => setFormState((prevState) => ({
                                        ...prevState, exams: _exams
                                    }))}
                                />
                            }
                        />
                        <FormField
                            label="Ano"
                            child={
                                <Select
                                    value={formState.years}
                                    multiple={true}
                                    options={years}
                                    showSearchbar={true}
                                    placeholder="Adicionar ano"
                                    onChange={(_years) => setFormState((prevState) => ({
                                        ...prevState, years: _years
                                    }))}
                                />
                            }
                        />
                    </Row>
                </Col>
            </Section>

            <SelectedFilter formState={formState} setFormState={setFormState} />

            <Row gap="10px" justifyContent="flex-end">
                <SquareButton
                    text="Limpar"
                    color={c_grey_six}
                    onClick={handleClearFilter}
                    borderColor={'transparent'}
                    backgroundColor={'transparent'}
                />
                <SquareButton
                    text="Aplicar"
                    color={c_white}
                    onClick={() => { }}
                    backgroundColor={c_dark_blue}
                />
            </Row>
        </Container>
    );
}

export default Filter;