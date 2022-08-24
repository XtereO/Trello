import { Formik, useFormikContext } from "formik";
import { memo } from "react";
import { Modal } from "react-bootstrap";

type Props = {
  show: boolean;
  closeHandler: () => void;
  addFunction: (text: string) => void;
  borrowedGroup: any[];
  title: string;
};

export const AddList = memo<Props>((props) => {
  return (
    <Formik
      enableReinitialize
      initialValues={{ text: "" }}
      validate={(values) => {
        let errors = { text: "" };
        props.borrowedGroup.forEach((b) => {
          if (b.title === values.text) {
            errors.text = "Its title have already exist";
          }
        });
        return errors.text ? errors : {};
      }}
      onSubmit={(values) => {
        props.addFunction(values.text);
        values.text = "";
        props.closeHandler();
      }}
    >
      {({ values, errors, touched, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Modal
            show={props.show}
            onHide={props.closeHandler}
          >
            <Modal.Header closeButton>
              <Modal.Title>Add {props.title}</Modal.Title>
            </Modal.Header>
            <div>
              <Modal.Body>
                Title:
                <div>
                  <input
                    className={
                      errors.text && touched.text
                        ? "form-control w-100 is-invalid"
                        : "form-control w-100"
                    }
                    name="text"
                    value={values.text}
                    onChange={handleChange}
                    required
                  />
                </div>
                {errors.text && touched.text && (
                  <div className="text-danger">{errors.text}</div>
                )}
              </Modal.Body>
              <Modal.Footer>
                <button type="reset" className="btn btn-danger" onClick={props.closeHandler}>
                  Close
                </button>
                <MyNaughtyButton text={values.text} errors={errors} />
              </Modal.Footer>
            </div>
          </Modal>
        </form>
      )}
    </Formik>
  );
});

type ButtonProps = {
  text: string;
  errors: any;
};

const MyNaughtyButton = memo<ButtonProps>((props) => {
  const { submitForm } = useFormikContext();
  return (
    <button
      onClick={() => {
        if (props.text && !(props.errors && props.errors.text)) {
          submitForm();
        }
      }}
      disabled={props.errors.text || !props.text ? true : false}
      className="btn btn-success"
    >
      Add
    </button>
  );
});
