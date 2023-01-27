'use client'
import React from 'react';
import {Auth, ThemeMinimal} from "@supabase/auth-ui-react";
import {useSupabase} from "./supabase-provider";
import SignOutButton from "./SignOutButton";


const customTheme = {
    default: {
        colors: {
            brand: 'hsl(153 60.0% 53.0%)',
            brandAccent: 'hsl(154 54.8% 45.1%)',
            brandButtonText: 'white',
            defaultButtonBackground: 'white',
            defaultButtonBackgroundHover: '#eaeaea',
            defaultButtonBorder: 'lightgray',
            defaultButtonText: 'gray',
            dividerBackground: '#eaeaea',
            inputBackground: 'transparent',
            inputBorder: 'lightgray',
            inputBorderHover: 'gray',
            inputBorderFocus: 'gray',
            inputText: 'black',
            inputLabelText: 'gray',
            inputPlaceholder: 'darkgray',
            messageText: 'gray',
            messageTextDanger: 'red',
            anchorTextColor: 'gray',
            anchorTextHoverColor: 'darkgray',
        },
        space: {
            spaceSmall: '4px',
            spaceMedium: '8px',
            spaceLarge: '16px',
            labelBottomMargin: '8px',
            anchorBottomMargin: '4px',
            emailInputSpacing: '4px',
            socialAuthSpacing: '4px',
            buttonPadding: '10px 15px',
            inputPadding: '10px 15px',
        },
        fontSizes: {
            baseBodySize: '13px',
            baseInputSize: '14px',
            baseLabelSize: '14px',
            baseButtonSize: '14px',
        },
        fonts: {
            bodyFontFamily: `ui-sans-serif, sans-serif`,
            buttonFontFamily: `ui-sans-serif, sans-serif`,
            inputFontFamily: `ui-sans-serif, sans-serif`,
            labelFontFamily: `ui-sans-serif, sans-serif`,
        },
        // fontWeights: {},
        // lineHeights: {},
        // letterSpacings: {},
        // sizes: {},
        borderWidths: {
            buttonBorderWidth: '1px',
            inputBorderWidth: '1px',
        },
        // borderStyles: {},
        radii: {
            borderRadiusButton: '4px',
            buttonBorderRadius: '4px',
            inputBorderRadius: '4px',
        },
        // shadows: {},
        // zIndices: {},
        // transitions: {},
    },
    // You can also add more theme variations with different names.
}

function SignInUpForm(props) {
    const {supabase, session} = useSupabase()
    return !session ? (
            <Auth
                supabaseClient={supabase}
                appearance={{ theme: customTheme }}
                // appearance={{ theme: ThemeMinimal }}
            />
        ) : (
            <SignOutButton/>)
}

export default SignInUpForm;