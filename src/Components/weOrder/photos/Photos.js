import "../../../styles/Photos.css";
import Label from "../date/Label";

const Photos = (props) => {
  return (
    <section className="container photos">
      <h3 className="title1">Zdjęcia przedmiotu</h3>
      <input
        type="file"
        className="photo col-lg-10"
        id="photo"
        value={props.file}
        onChange={props.handleFile}
      />
      <Label
        for="photo"
        content={
          <>
            Przeciągnij i upuść zdjęcia lub <span>Wyszukaj</span>
          </>
        }
      />
    </section>
  );
};

export default Photos;
