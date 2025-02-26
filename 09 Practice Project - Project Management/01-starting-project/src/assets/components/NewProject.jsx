import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({onCancel, onAddProject}) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const modalRef= useRef();

    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === ''){
            modalRef.current.open();
            return;
        }

        onAddProject({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })
    }
    return (
        <>
        <Modal ref={modalRef} buttonLabel="Cancel">
            <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
            <p className="text-stone-600 mb-4">Oops please fill all the values</p>
        </Modal>
        <div className="w-[35rem] mt-16 ">
            <menu className="flex gap-4 items-center justify-end my-4">
                <li>
                    <button onClick={onCancel} className="text-stone-800 hover:text-stone-950">
                        Cancel
                    </button>
                </li>
                <li>
                    <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                </li>
            </menu>
            <div>
                <Input ref={title} type="text" label="Title"/>
                <Input ref={description} label="Description" isTextArea />
                <Input ref={dueDate} type="date" label="Due Date" />
            </div>
        </div>
        </>
    );
}