import React from "react";
import './loadingCard.scss';

export default function LoadingSpinner({ isLoading }) {
    if (isLoading) {
        return (
            <div className="loading_card_content">
                <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    } else {
        return null
    }
}