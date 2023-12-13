"use client"
import React, { useState, ChangeEvent } from 'react';

interface CheckboxState {
    solo: boolean;
    family: boolean;
    friends: boolean;
    couple: boolean;
}

interface StyleState {
    backpacking: boolean;
    luxury: boolean;
    medium: boolean;
}

interface ThemeState {
    adventure: boolean;
    historical: boolean;
    spiritual: boolean;
    nature: boolean;
    offbeat: boolean;
    romantic: boolean;
}

interface AreaState {
    mountains: boolean;
    beaches: boolean;
    mountainsBeaches: boolean;
    city: boolean;
    deserts: boolean;
    cruise: boolean;
    villages: boolean;
}

interface PaceState {
    relaxation: boolean;
    fast: boolean;
    mediumPace: boolean;
}

interface EatsState {
    localAuthentic: boolean;
    street: boolean;
    fineDine: boolean;
}

const Planner: React.FC = () => {
    const [travelTypes, setTravelTypes] = useState<CheckboxState>({
        solo: false,
        family: false,
        friends: false,
        couple: false,
    });

    const [travelStyle, setTravelStyle] = useState<StyleState>({
        backpacking: false,
        luxury: false,
        medium: false,
    });

    const [travelThemes, setTravelThemes] = useState<ThemeState>({
        adventure: false,
        historical: false,
        spiritual: false,
        nature: false,
        offbeat: false,
        romantic: false,
    });

    const [travelAreas, setTravelAreas] = useState<AreaState>({
        mountains: false,
        beaches: false,
        mountainsBeaches: false,
        city: false,
        deserts: false,
        cruise: false,
        villages: false,
    });

    const [travelPace, setTravelPace] = useState<PaceState>({
        relaxation: false,
        fast: false,
        mediumPace: false,
    });

    const [eatsPreferences, setEatsPreferences] = useState<EatsState>({
        localAuthentic: false,
        street: false,
        fineDine: false,
    });

    const [safetyForSoloWomen, setSafetyForSoloWomen] = useState(false);

    const [countryName, setCountryName] = useState('');

    const handleCheckboxChange = (
        category: string,
        value: string | null
    ): void => {
        switch (category) {
            case 'travelTypes':
                setTravelTypes({
                    ...travelTypes,
                    [value as keyof CheckboxState]: !travelTypes[
                        value as keyof CheckboxState
                    ],
                });
                break;
            case 'travelStyle':
                setTravelStyle({
                    ...travelStyle,
                    [value as keyof StyleState]: !travelStyle[
                        value as keyof StyleState
                    ],
                });
                break;
            case 'travelThemes':
                setTravelThemes({
                    ...travelThemes,
                    [value as keyof ThemeState]: !travelThemes[
                        value as keyof ThemeState
                    ],
                });
                break;
            case 'travelAreas':
                setTravelAreas({
                    ...travelAreas,
                    [value as keyof AreaState]: !travelAreas[
                        value as keyof AreaState
                    ],
                });
                break;
            case 'travelPace':
                setTravelPace({
                    ...travelPace,
                    [value as keyof PaceState]: !travelPace[value as keyof PaceState],
                });
                break;
            case 'eatsPreferences':
                setEatsPreferences({
                    ...eatsPreferences,
                    [value as keyof EatsState]: !eatsPreferences[
                        value as keyof EatsState
                    ],
                });
                break;
            case 'safetyForSoloWomen':
                setSafetyForSoloWomen(!safetyForSoloWomen);
                break;
            default:
                break;
        }
    };

    const handleCountryNameChange = (
        event: ChangeEvent<HTMLInputElement>
    ): void => {
        setCountryName(event.target.value);
    };

    return (
        <div className='flex justify-end h-screen bg-gray-300'>
            <form className="container mx-auto p-4 max-w-md">
                <div className="mb-4 text-center">
                    <label className="block text-gray-700 text-sm font-bold mb-2 ">
                        Country Name
                    </label>
                    <input
                        type="text"
                        id="countryName"
                        value={countryName}
                        onChange={handleCountryNameChange}
                        className="w-full border border-gray-300 rounded p-2 text-gray-700"
                    />
                </div>

                <div className='flex gap-10 justify-center'>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Type of Travel
                        </label>
                        {Object.keys(travelTypes).map((type) => (
                            <div key={type} className="mb-2">
                                <input
                                    type="checkbox"
                                    id={type}
                                    checked={travelTypes[type as keyof CheckboxState]}
                                    onChange={() => handleCheckboxChange('travelTypes', type)}
                                    className="mr-2"
                                />
                                <label htmlFor={type} className=" text-gray-600">
                                    {type}
                                </label>
                            </div>
                        ))}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Type of Travel Style
                        </label>
                        {Object.keys(travelStyle).map((style) => (
                            <div key={style} className="mb-2">
                                <input
                                    type="checkbox"
                                    id={style}
                                    checked={travelStyle[style as keyof StyleState]}
                                    onChange={() => handleCheckboxChange('travelStyle', style)}
                                    className="mr-2"
                                />
                                <label htmlFor={style} className="text-gray-600">
                                    {style}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex gap-10 justify-center'>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Type of Travel Themes
                        </label>
                        {Object.keys(travelThemes).map((theme) => (
                            <div key={theme} className="mb-2">
                                <input
                                    type="checkbox"
                                    id={theme}
                                    checked={travelThemes[theme as keyof ThemeState]}
                                    onChange={() => handleCheckboxChange('travelThemes', theme)}
                                    className="mr-2"
                                />
                                <label htmlFor={theme} className="text-gray-600">
                                    {theme}
                                </label>
                            </div>
                        ))}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Area
                        </label>
                        {Object.keys(travelAreas).map((area) => (
                            <div key={area} className="mb-2">
                                <input
                                    type="checkbox"
                                    id={area}
                                    checked={travelAreas[area as keyof AreaState]}
                                    onChange={() => handleCheckboxChange('travelAreas', area)}
                                    className="mr-2"
                                />
                                <label htmlFor={area} className="text-gray-600">
                                    {area}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex gap-10 justify-center'>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Pace
                        </label>
                        {Object.keys(travelPace).map((pace) => (
                            <div key={pace} className="mb-2">
                                <input
                                    type="checkbox"
                                    id={pace}
                                    checked={travelPace[pace as keyof PaceState]}
                                    onChange={() => handleCheckboxChange('travelPace', pace)}
                                    className="mr-2"
                                />
                                <label htmlFor={pace} className="text-gray-600">
                                    {pace}
                                </label>
                            </div>
                        ))}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Eats Preferences
                        </label>
                        {Object.keys(eatsPreferences).map((preference) => (
                            <div key={preference} className="mb-2">
                                <input
                                    type="checkbox"
                                    id={preference}
                                    checked={eatsPreferences[preference as keyof EatsState]}
                                    onChange={() => handleCheckboxChange('eatsPreferences', preference)}
                                    className="mr-2"
                                />
                                <label htmlFor={preference} className="text-gray-600">
                                    {preference}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                {travelTypes.solo && (
                    <div className="mb-4 flex justify-center">
                        <input
                            type="checkbox"
                            id="safetyForSoloWomen"
                            checked={safetyForSoloWomen}
                            onChange={() => handleCheckboxChange('safetyForSoloWomen', null)}
                            className="mr-2"
                        />
                        <label htmlFor="safetyForSoloWomen" className="text-gray-600">
                            Safety for Solo Women
                        </label>
                    </div>
                )}
            </form>

            {/* Response from gpt */}
            <div className='container mx-auto p-4 w-[60%] text-center bg-gray-200'>
                Response
            </div>
        </div>

    );
};

export default Planner;
