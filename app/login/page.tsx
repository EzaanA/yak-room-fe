import { FC, memo } from "react";

// Components
import { Flex } from 'antd';

const Login: FC = () => {
    return (
        <Flex dir="ltr" className="h-lvh m-10">
            <div className="w-4/5 bg-sky-200 rounded-2xl"> Hi</div>
            <div className="w-1/5"> Hello</div>
        </Flex>
    );
}

export default memo(Login);