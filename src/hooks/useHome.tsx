import axios from 'axios';
import { Dispatch, useEffect, useState } from 'react';

import { buttonContentMock } from '@/utils/mocks/home/button-content-mock';
import { serviceStateMock } from '@/utils/mocks/home/service-state.mock';
import { useRouter } from 'next/router';
import { challengerHomeLanguage } from '@/dictionaries/languages/pages/Home/language';

interface UseHomeProps {
  buttonText: string;
  modalVisibility: boolean;
  serviceState: ServiceStateProps;
  buttonContent: ButtonContentProps;
  setServiceState: Dispatch<ServiceStateProps>;
  setModalVisibility: Dispatch<boolean>;
  handleGetButtonContent: (
    title: string,
    text: string,
    sale_challenger: string,
    cost_challenger: string,
    personalization_challenger: string
  ) => void;
  handleToggleModalAndLoadingVideo: () => void;
}

export function useHome(): UseHomeProps {
  const { locale }: any = useRouter();

  const { challengerButtonContentMock } = challengerHomeLanguage[locale];

  const [buttonText, setButtonText] = useState('Vender mais');
  const [modalVisibility, setModalVisibility] = useState(false);
  const [serviceState, setServiceState] = useState(
    serviceStateMock as ServiceStateProps
  );
  const [buttonContent, setButtonContent] = useState(
    challengerButtonContentMock as ButtonContentProps
  );

  // FUNC: Handle active and disabled modal visibility
  function handleToggleModalAndLoadingVideo() {
    setModalVisibility(true);
    const video = document.getElementById('iframeVideo') as HTMLIFrameElement;
    if (video)
      video.src = 'https://www.youtube.com/embed/GLpCoJBFu98?&autoplay=1';
  }

  // FUNC: Handle get data with content
  function handleGetButtonContent(
    title: string,
    text: string,
    sale_challenger: string,
    cost_challenger: string,
    personalization_challenger: string
  ) {
    setButtonText(text);
    setButtonContent({
      title,
      text,
      sale_challenger,
      cost_challenger,
      personalization_challenger,
    });
  }

  // FUNC: is loading page functions ==================
  useEffect(() => {
    // setInterval(() => {
    //   const options = {
    //     url: process.env.NEXT_PUBLIC_BASE_URL_SERVICE,
    //     method: 'GET',
    //   };

    //   axios.request(options).then((response) => {
    //     setServiceState(response.data);
    //   });
    // }, 3000);
  }, []);

  return {
    buttonText,
    serviceState,
    buttonContent,
    setServiceState,
    modalVisibility,
    setModalVisibility,
    handleGetButtonContent,
    handleToggleModalAndLoadingVideo,
  };
}
