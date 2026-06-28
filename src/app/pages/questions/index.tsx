import Row from "../../components/row_styles";

import PageTitle from "../../ui/page-title";
import SquareButton from "../../ui/button/square-button";

import { c_dark_blue, c_grey_six, c_white } from "../../constants/colors";

import PlusSvg from "../../../assets/svg/icons/plus";
import FilterSvg from "../../../assets/svg/icons/filter";

import type { UserEntity } from "../../interfaces/entities/user-entity";
import type { QuestionEntity } from "../../interfaces/entities/question-entity";

import Filter from "../../ui/filter";
import QuestionsList from "../../ui/questions-list";

import UserRoleEnum from "../../constants/enum/user-role.enum";
import QuestionTypeEnum from "../../constants/enum/question-type.enum";
import QuestionAnswerEnum from "../../constants/enum/question-answer.enum";

import { TitleSection } from "./styles";

const QuestionsPage = () => {

    const user: UserEntity = {
        uid: '',
        name: 'John Doe',
        picture: {
            src: 'https://avatars.githubusercontent.com/u/61476935?v=4&size=64',
        },
        role: UserRoleEnum.ADMIN
    }

    const questions: Array<QuestionEntity> = [
        {
            uuid: 'k4037557',
            year: 2026,
            examining_board: 'FEPESE',
            exam: 'InvestSC - 2026 - Agente Administrativo - Analista Administrativo ',
            options: [
                { key: 'A', statement: '32%' },
                { key: 'B', statement: '36%' },
                { key: 'C', statement: '40%' },
                { key: 'D', statement: '44%' },
                { key: 'E', statement: '50%' }
            ],
            prompt: 'Para que o valor do imóvel retorne exatamente ao patamar que possuía antes do primeiro desses dois reajustes, o novo valor atualizado deve sofrer um desconto único de:',
            statement: 'O valor venal de um imóvel para fins de cálculo tributário municipal sofreu dois aumentos sucessivos de 25% cada em um determinado biênio.',
            answer: QuestionAnswerEnum.A,
            question_type: QuestionTypeEnum.MULTIPLE_CHOICE,
            numberOfComments: 0,
            subject: {
                id: '1',
                title: 'Matemática'
            },
            topic: {
                id: '1',
                title: 'Porcentagem'
            }
        },
        {
            uuid: 'k4037558',
            year: 2026,
            examining_board: 'CESPE / CEBRASPE',
            exam: 'TCE-RN - 2026 - Auditor de Controle Externo - Especialidade: Direito',
            options: [],
            prompt: 'Julgue o próximo item, relativo ao Microsoft Office, à Política Nacional de Educação Digital (PNED), bem como a inteligência artificial generativa (IAG), a ameaças digitais e ao Portal Brasileiro de Dados Abertos.',
            statement: 'O pharming é uma variante do phishing, pois redireciona o browser do usuário para um site falso, visando roubar identidade digital e informação sensível.',
            answer: QuestionAnswerEnum.TRUE,
            question_type: QuestionTypeEnum.TRUE_OR_FALSE,
            numberOfComments: 10,
            subject: {
                id: '2',
                title: 'Informática'
            },
            topic: {
                id: '1',
                title: 'Segurança da Informação'
            }
        },
    ];

    return (
        <>
            <TitleSection>
                <PageTitle
                    title="Questões"
                    buttons={
                        <Row gap="10px">
                            {(user.role == UserRoleEnum.ADMIN) ?
                                <SquareButton
                                    text="Criar"
                                    isActive={true}
                                    color={c_white}
                                    onClick={() => { }}
                                    backgroundColor={c_dark_blue}
                                    icon={<PlusSvg color={c_white} />}
                                /> : null
                            }
                            <SquareButton
                                text="Filtro"
                                isActive={true}
                                color={c_grey_six}
                                onClick={() => { }}
                                borderColor={c_grey_six}
                                backgroundColor={'transparent'}
                                icon={<FilterSvg color={c_grey_six} />}
                            />
                        </Row>
                    }
                />
            </TitleSection>
            <Filter />
            <QuestionsList questions={questions} user={user} />
        </>
    );
}

export default QuestionsPage;