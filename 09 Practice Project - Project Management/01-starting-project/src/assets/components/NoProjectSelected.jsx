import noProjectInWorkspace from '../../assets/no-projects.png'

import ButtonCSS from './ButtonCSS';
export default function NoProjectSelected({onStartAdd}){

    return(
        <div className="mt-24 text-center w-2/3">
            <img src={noProjectInWorkspace} alt="An empty task list" className='w-16 h-16 object-contain mx-auto'/>
            <h2 className='text-xl font-bold text-stone-500 my-4'>
                No project selected
            </h2>
            <p className="text-stone-400 mb-4"> Select a project or get started with new one</p>
            <p className='mt-8'>
                <ButtonCSS onClick={onStartAdd}>
                    Create a new project
                </ButtonCSS>
            </p>
        </div>
    );
}