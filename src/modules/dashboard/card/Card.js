import React from 'react';
import { MetroSpinner } from 'react-spinners-kit';
import { CS } from './CardStyle';
export default function SpacingGrid({
    icon,
    heading,
    value,
    USERS_LOADING,
    COURSE_LOADING,
    EVENTS_LOADING,
    SUCCESS_LOADING,
    SPEAKERS_LOADING,
    BATCH_LOADING,
    ENROLMENT_LOADING
}) {
    return (
        <CS.CardContainer>
            <CS.CenterContainer>
                {icon}
                <CS.Heading>
                    {heading}
                </CS.Heading>
                {
                    USERS_LOADING ||
                        COURSE_LOADING ||
                        EVENTS_LOADING ||
                        SUCCESS_LOADING ||
                        SPEAKERS_LOADING ||
                        BATCH_LOADING ||
                        ENROLMENT_LOADING ?
                        <div
                            style={{ display: "flex", justifyContent: "center" }}>
                            <MetroSpinner
                                color="#0D4cb5"
                                height={10}
                                width={10}
                            />
                        </div>
                        :
                        <CS.Value>
                            {value}
                        </CS.Value>
                }
            </CS.CenterContainer>
        </CS.CardContainer>
    );
}
