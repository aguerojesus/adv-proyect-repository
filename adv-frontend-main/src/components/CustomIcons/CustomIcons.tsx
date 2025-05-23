import React from 'react';
import Icon, { HomeOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import type { GetProps } from 'antd';

type CustomIconComponentProps = GetProps<typeof Icon>;

const HeartSvg = () => (
    <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
        <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
    </svg>
);

const PandaSvg = () => (
    <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
        <path
            d="M99.096 315.634s-82.58-64.032-82.58-132.13c0-66.064 33.032-165.162 148.646-148.646 83.37 11.91 99.096 165.162 99.096 165.162l-165.162 115.614zM924.906 315.634s82.58-64.032 82.58-132.13c0-66.064-33.032-165.162-148.646-148.646-83.37 11.91-99.096 165.162-99.096 165.162l165.162 115.614z"
            fill="#6B676E"
        />
        <path
            d="M1024 561.548c0 264.526-229.23 429.42-512.002 429.42S0 826.076 0 561.548 283.96 66.064 512.002 66.064 1024 297.022 1024 561.548z"
            fill="#FFEBD2"
        />
        <path
            d="M330.324 842.126c0 82.096 81.34 148.646 181.678 148.646s181.678-66.55 181.678-148.646H330.324z"
            fill="#E9D7C3"
        />
        <path
            d="M644.13 611.098C594.582 528.516 561.55 512 512.002 512c-49.548 0-82.58 16.516-132.13 99.096-42.488 70.814-78.73 211.264-49.548 247.742 66.064 82.58 165.162 33.032 181.678 33.032 16.516 0 115.614 49.548 181.678-33.032 29.18-36.476-7.064-176.93-49.55-247.74z"
            fill="#FFFFFF"
        />
        <path
            d="M611.098 495.484c0-45.608 36.974-82.58 82.58-82.58 49.548 0 198.194 99.098 198.194 165.162s-79.934 144.904-148.646 99.096c-49.548-33.032-132.128-148.646-132.128-181.678zM412.904 495.484c0-45.608-36.974-82.58-82.58-82.58-49.548 0-198.194 99.098-198.194 165.162s79.934 144.904 148.646 99.096c49.548-33.032 132.128-148.646 132.128-181.678z"
            fill="#6B676E"
        />
        <path
            d="M512.002 726.622c-30.06 0-115.614 5.668-115.614 33.032 0 49.638 105.484 85.24 115.614 82.58 10.128 2.66 115.614-32.944 115.614-82.58-0.002-27.366-85.556-33.032-115.614-33.032z"
            fill="#464655"
        />
        <path
            d="M330.324 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"
            fill="#464655"
        />
        <path
            d="M693.678 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"
            fill="#464655"
        />
    </svg>
);

const HotelFacadeSvg = () => (
    <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
        {/* Estructura principal del hotel */}
        <path
            d="M99.096 315.634s-82.58-64.032-82.58-132.13c0-66.064 33.032-165.162 148.646-148.646 83.37 11.91 99.096 165.162 99.096 165.162l-165.162 115.614zM924.906 315.634s82.58-64.032 82.58-132.13c0-66.064-33.032-165.162-148.646-148.646-83.37 11.91-99.096 165.162-99.096 165.162l165.162 115.614z"
            fill="#6B676E"
        />
        <path
            d="M1024 561.548c0 264.526-229.23 429.42-512.002 429.42S0 826.076 0 561.548 283.96 66.064 512.002 66.064 1024 297.022 1024 561.548z"
            fill="#FFEBD2"
        />
        {/* Detalles de la fachada */}
        <rect x="350" y="280" width="324" height="520" fill="#E9D7C3" /> {/* Puerta principal */}
        <rect x="400" y="420" width="224" height="60" fill="#6B676E" /> {/* Ventana de la planta baja */}
        <rect x="400" y="520" width="224" height="60" fill="#6B676E" /> {/* Segunda ventana de la planta baja */}
        <rect x="400" y="620" width="224" height="60" fill="#6B676E" /> {/* Tercera ventana de la planta baja */}
        <rect x="400" y="220" width="224" height="40" fill="#6B676E" /> {/* Letrero del hotel */}
        {/* Detalles de las ventanas de arriba */}
        <rect x="400" y="150" width="100" height="40" fill="#6B676E" />
        <rect x="550" y="150" width="100" height="40" fill="#6B676E" />
        <rect x="700" y="150" width="100" height="40" fill="#6B676E" />
    </svg>
);

const AirplaneDepartureSvg = () => {
    <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
        <path d="M85.333333 789.333333h853.333334v85.333334H85.333333z" fill="#546E7A" /><path d="M673.024 306.709333s-223.594667-152.832-266.069333-156.8C364.458667 145.984 320 163.264 320 163.264l177.173333 191.381333 175.850667-47.936z" fill="#7986CB" />
        <path d="M42.666667 256l133.098666 191.808 121.557334-88.810667L106.666667 234.666667z" fill="#3F51B5" /><path d="M245.141333 368.704s371.029333-133.845333 472.874667-165.632c122.218667-38.101333 235.093333 13.546667 242.005333 35.669333 6.336 20.330667-26.133333 53.397333-156.8 94.186667-130.666667 40.768-391.381333 140.224-391.381333 140.224S224.341333 532.032 64 448c113.493333-54.037333 181.141333-79.296 181.141333-79.296z" fill="#9FA8DA" />
        <path d="M686.933333 374.656c-5.248 29.696-121.856 252.053333-156.821333 276.544C495.168 675.669333 448 682.666667 448 682.666667c54.208-220.565333 55.04-220.394667 62.421333-262.549334 5.226667-29.717333 181.76-75.157333 176.512-45.461333z" fill="#9FA8DA" /><path d="M923.669333 212.266667c-16.490667-7.296-37.994667-13.866667-62.549333-18.112l10.432 34.090666 52.117333-15.978666zM797.909333 206.165333l40.810667-12.501333 12.501333 40.832-40.810666 12.501333z" fill="#283593" /><path d="M438.741333 378.922667m-21.333333 0a21.333333 21.333333 0 1 0 42.666667 0 21.333333 21.333333 0 1 0-42.666667 0Z" fill="#283593" /><path d="M519.338667 350.954667m-21.333334 0a21.333333 21.333333 0 1 0 42.666667 0 21.333333 21.333333 0 1 0-42.666667 0Z" fill="#283593" /><path d="M620.096 315.946667a21.376 21.376 0 0 1-13.098667 27.2 21.44 21.44 0 0 1-27.2-13.205334 21.397333 21.397333 0 0 1 13.141334-27.157333 21.376 21.376 0 0 1 27.157333 13.162667z" fill="#283593" /><path d="M680.597333 294.976m-21.333333 0a21.333333 21.333333 0 1 0 42.666667 0 21.333333 21.333333 0 1 0-42.666667 0Z" fill="#283593" /></svg>
}

const CustomIcons = () => {
    const HeartIcon = (props: Partial<CustomIconComponentProps>) => (
        <Icon component={HeartSvg} {...props} />
    );

    const PandaIcon = (props: Partial<CustomIconComponentProps>) => (
        <Icon component={PandaSvg} {...props} />
    );

    const HotelIcon = (props: Partial<CustomIconComponentProps>) => (
        <Icon component={HotelFacadeSvg} {...props} />
    );

  
    return{
        HeartIcon,
        PandaIcon,
        HotelIcon
    }
}




export default CustomIcons;