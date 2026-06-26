import ActivitySvg from "../../../assets/svg/icons/activity";
import TargetSvg from "../../../assets/svg/icons/target";
import {
    c_dark_red,
    c_dark_yellow,
    c_grey_six,
    c_light_green,
    c_white
} from "../../constants/colors";

import { TouchableArea } from "./styles";

interface Props {
    percentage: number,
    action?: Function,
}

const DailyGoal = (props: Props) => {

    const { percentage } = props;

    const color = (percentage == 100)
        ? c_white : (percentage >= 90)
            ? c_light_green : (percentage >= 50)
                ? c_dark_yellow : (percentage > 0)
                    ? c_dark_red : c_grey_six
    const backgroundColor = (percentage == 100) ? c_light_green : c_white;

    return (
        <TouchableArea
            color={color}
            onClick={() => props.action}
            backgroundColor={backgroundColor}
        >
            {percentage}%
            {(percentage == 100)
                ? <TargetSvg color={color} />
                : <ActivitySvg color={color} />
            }
        </TouchableArea>
    );
};

export default DailyGoal;