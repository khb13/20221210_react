import styled from "styled-components";
import { RxPlus } from "react-icons/rx";
import { useEffect, useState } from "react";
import { Button } from "../common/button";
import { converUrl, getPostById, postPost } from "../../api/admin";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const { id } = useParams();

  const [post, setPost] = useState(null);

  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    content: "",
    images: [],
  });

  const [previewUrls, setPreviewUrls] = useState([]);

  const handleImges = (e) => {
    if (inputs.images.length + e.target.files.length > 5) {
      window.alert("사진은 5개 이하로 등록해주세요");
      return;
    }
    const { files } = e.target;

    setPreviewUrls([]);

    setInputs((inputs) => {
      const prevImages = inputs.images;

      const fileArr = [...prevImages, ...files];

      fileArr.forEach((file) => {
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = () => {
          setPreviewUrls((urls) => [...urls, reader.result]);
        };
      });

      return {
        ...inputs,
        images: [...prevImages, ...files],
      };
    });
  };

  const handleSubmit = async () => {
    const form = new FormData();

    form.append("content", inputs.content);

    inputs.images.forEach((image) => {
      form.append("images", image);
    });

    for (let pair of form.entries()) {
      console.log(pair[0], pair[1]);
    }
    try {
      const post = await postPost(form);

      navigate("post/" + post.id);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  useEffect(() => {
    if (id) {
      getPostById(id).then((data) => {
        setInputs((inputs) => ({ ...inputs, content: data.content }));

        Promise.all(
          data.img_list.map((img) => {
            const file = converUrl(img.url);
            return file;
          })
        ).then((res) => console.log(res));
      });
    }
  }, [id]);

  return (
    <Container>
      <Textarea
        placeholder="글을 입력해주세요."
        value={inputs.content}
        onChange={(e) =>
          setInputs((inputs) => ({ ...inputs, content: e.target.value }))
        }
      ></Textarea>

      <ImagesWrapper>
        {previewUrls.map((url, idx) => (
          <Preview key={idx} url={url} />
        ))}

        <input
          type="file"
          accept="image/*"
          multiple
          style={{ display: "none" }}
          id="postImages"
          onChange={handleImges}
        />
      </ImagesWrapper>

      <BtnInput htmlFor="postImages">
        <RxPlus color="#ccc" size={40} />
      </BtnInput>

      <Button
        style={{ position: "absolute", bottom: 0, left: 0 }}
        onClick={handleSubmit}
      >
        등록
      </Button>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 20px;

  position: relative;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 5px;

  border: 1px solid #eee;
  outline: none;
  resize: none;
`;

const ImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const BtnInput = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;

  border: 2px solid #eee;
  cursor: pointer;
`;

export default Edit;

function Preview({ url }) {
  return (
    <PreviewBox>
      <img src={url} alt="" />
    </PreviewBox>
  );
}

const PreviewBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;

  overflow: hidden;

  img {
    width: 200px;
  }
`;
