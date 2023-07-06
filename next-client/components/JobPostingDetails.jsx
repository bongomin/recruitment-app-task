import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import ApplicationModal from './ApplicationModal';

function JobPostingDetails() {
  const items = [
    { jobType: 'Full-time' },
    { location: 'San Francisco' },
    { salary: '$60,000' },
    { experience: '3 years' }
  ];

  const [showModal, setShowModal] = useState(false);

  const handleApplyNowClick = () => {
    setShowModal(true);
  };

  return (
    <div className='mt-10'>
      <Transition
        show={true}
        enter='transition-opacity duration-1000'
        enterFrom='opacity-0'
        enterTo='opacity-100'
      >
        <div className='test rounded border border-gray-300 shadow p-4'>
          <div className='banner-info flex flex-col pb-5 items-center'>
            <img src='./fullstack-development.png' alt='Banner' className='w-20 h-20 mb-4' />
            <h1 className='text-center text-blue-500 capitalize'>Full stack engineer</h1>
          </div>
          <div className='grid grid-cols-2 gap-4 mt-4'>
            {items.map((item, index) => (
              <div key={index} className='p-2'>
                <div className='flex items-center'>
                  <div className='w-2 h-2 rounded-full bg-blue-500 mr-2'></div>
                  <div>
                    {Object.keys(item).map((key, i) => (
                      item[key] && <p key={i}><strong>{key}:</strong> {item[key]}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='description pb-4 pt-4 text-gray-500'>
            <h1 className='text-left text-2xl font-bold text-black-800'>Description</h1>
            <ul className='list-disc list-inside leading-6'>
              <li>Experience with HTML, CSS, and JavaScript</li>
              <li>Proficiency in at least one backend language (e.g., Node.js, Python, Ruby)</li>
              <li>Experience with modern frontend frameworks (e.g., React, Angular, Vue.js)</li>
              <li>Knowledge of databases and SQL</li>
            </ul>
          </div>
          <div className='requiremets-div pb-4 pt-4 text-gray-500'>
            <h1 className='text-2xl font-bold text-black-800'>Requirements</h1>
            <ul className='list-disc list-inside leading-6'>
              <li>Bachelor's in Computer Science or related field</li>
              <li>Strong problem-solving and debugging skills</li>
              <li>Ability to work in a team and collaborate effectively</li>
              <li>Excellent communication and interpersonal skills</li>
            </ul>
          </div>
          <button
            className='w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'
            onClick={handleApplyNowClick}
          >
            Apply Now
          </button>
        </div>
      </Transition>
      {showModal && <ApplicationModal />}
    </div>
  );
}

export default JobPostingDetails;
