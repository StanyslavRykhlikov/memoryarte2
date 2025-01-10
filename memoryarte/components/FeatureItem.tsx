import React from 'react';
import Image from 'next/image';
import {FeatureItem as FeatureItemType} from '@/constants/mainImages';

const FeatureItem: React.FC<FeatureItemType> = ({image, title, description}) => {
    return (
        <div className="text-center">
            <div
                className="w-32 h-32 mx-auto mb-4 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    width={128}
                    height={128}
                    className="object-cover"
                />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{description}</p>
        </div>
    );
};

export default FeatureItem;

