// export * from './site'
export * from './user'

import { FC, SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
};
