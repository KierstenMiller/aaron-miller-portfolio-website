'use client'

import { useState } from "react";
import { useInView } from "react-intersection-observer";

export enum viewOptions { work = 'work', profile = 'profile', contact = 'contact' }

// left "entry" values for debugging in future (I'll probably forget the entry is available to me... and it's very useful)
export const useViews = (initView: viewOptions) => {
    const [currentView, setCurrentView] = useState(initView);
    const [workRef, workInView, workEntry] = useInView({ threshold: 0.1, onChange: (inView) => viewFinder(viewOptions.work, inView) });
    const [profileRef, profileInView, profileEntry] = useInView({ threshold: 0.1, onChange: (inView) => viewFinder(viewOptions.profile, inView) });
    const [contactRef, contactInView, contactEntry] = useInView({ threshold: 0.1, onChange: (inView) => viewFinder(viewOptions.contact, inView) });
    const viewData = [{ id: viewOptions.work, value: workInView }, { id: viewOptions.profile, value: profileInView }, { id: viewOptions.contact, value: contactInView }];
    const viewFinder = (self: viewOptions, selfInView: boolean) => {
        selfInView
            ? setCurrentView(self)
            : setCurrentView(viewData.filter(item => (item.id !== self) && (item?.value === true))[0]?.id)
    }
    return { currentView, workRef, profileRef, contactRef }
}
