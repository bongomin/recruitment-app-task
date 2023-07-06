import { JobPostingProps } from '@/interface';
// import { createSlice} from '@reduxjs/toolkit';

const jobPostings = [
    {
        id: 1,
        title: 'Job Posting 1',
        description: 'This is the description for Job Posting 1.',
        location: 'City A',
        amount: 10000,
        datePosted: '2023-07-05',
    },
    {
        id: 2,
        title: 'Job Posting 2',
        description: 'This is the description for Job Posting 2.',
        location: 'City B',
        amount: 15000,
        datePosted: '2023-07-04',
    },
    {
        id: 3,
        title: 'Job Posting 3',
        description: 'This is the description for Job Posting 3.',
        location: 'City C',
        amount: 12000,
        datePosted: '2023-07-03',
    },
    {
        id: 4,
        title: 'Job Posting 4',
        description: 'This is the description for Job Posting 4.',
        location: 'City D',
        amount: 18000,
        datePosted: '2023-07-02',
    },
    // Add more job postings here
];

export interface IJobPostingState {
    jobPostings: Array<JobPostingProps>
}

// const initialState: IJobPostingState = {
//     jobPostings
// }

// export const jobPostingState = createSlice({
//     name: 'jobPostings',
//     initialState,
//     reducers: {
//         listJobPostings: (state, action) => {
//             state.jobPostings = action.payload
//         }
//     }
// })

// export const {listJobPostings} = jobPostingState.actions

// export default jobPostingState.reducer;