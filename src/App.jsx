import './App.css';
import favoriteXiTrumImage from '../xi_trum/Messenger_creation_86E2A5C0-9CEE-4DB8-BE2F-DAEFE97B950D.jpeg';
import favoriteOurImage from '../xi_trum/20240706_133133.jpg';
import pic1 from '../xi_trum/20240609_002201.jpg';
import pic2 from '../xi_trum/06072024_14012025.jpg';
import pic3 from '../xi_trum/20240609_002200.jpg';
import pic4 from '../xi_trum/20250108_002201.jpeg';
import pic5 from '../xi_trum/20240706_133145.jpg';
import pic6 from '../xi_trum/20240820_184150.jpg';
import pic7 from '../xi_trum/IMG_20241209_100840.jpg';
import pic8 from '../xi_trum/Messenger_creation_9A16EF91-B695-4E5D-B869-6832E0265302.jpeg';
import pic9 from '../xi_trum/Messenger_creation_43405139-D0BF-4FBE-82A4-EBA930C6E4CF.jpeg';
import pic10 from '../xi_trum/Messenger_creation_968842B9-AE49-4343-A41C-C21836C1046B.jpeg';
import pic11 from '../xi_trum/Messenger_creation_B5421C73-DA9E-429D-A923-025041B4E490.jpeg';
import pic12 from '../xi_trum/Messenger_creation_0F61DAD2-6CA6-4D8E-A672-19385580B9F0.jpeg';
import pic13 from '../xi_trum/Messenger_creation_0558468D-F23B-4CC9-87E7-130AEA08BD3E.jpeg';
import pic14 from '../xi_trum/Messenger_creation_A2F2CEC3-467C-43BE-B3B4-0DEA6A9AA45D.jpeg';
import pic15 from '../xi_trum/Messenger_creation_7E9D77D8-890B-4183-B8A8-26F19310F1E8.jpeg';
import pic16 from '../xi_trum/Messenger_creation_73D4B9CB-8B4E-4AC3-85DE-D69780027C74.jpeg';
import pic17 from '../xi_trum/Messenger_creation_2BE3A43A-D7CB-43A8-9D19-44EF514E7586.jpeg';
import pic18 from '../xi_trum/Messenger_creation_3ADB3321-0380-4646-91D6-039ABACFE5EA.jpeg';
import pic19 from '../xi_trum/Messenger_creation_E12378BE-626F-479A-B4CC-358EA8B8B27F.jpeg';
import pic20 from '../xi_trum/Messenger_creation_24DA4E12-7374-4002-B25E-187BFA954B8B.jpeg';
import pic21 from '../xi_trum/Messenger_creation_D785A32C-97A3-4F02-B998-FA8872C2B2A7.jpeg';
import pic22 from '../xi_trum/Messenger_creation_210A2D4B-3888-4929-A419-8AB941959101.jpeg';
import pic23 from '../xi_trum/Messenger_creation_4C5F6DCB-ACAF-4A75-9860-8B9D8E87EBEE.jpeg';
import pic24 from '../xi_trum/Messenger_creation_df902297-3f95-41fb-9060-f6474b9fcf72.jpeg';
import pic25 from '../xi_trum/Messenger_creation_f9b91662-41af-4ae6-b7ea-2b3a3fca1bfa.jpeg';
import pic26 from '../xi_trum/Messenger_creation_990e7079-0b37-471a-9416-8d8927f5489e.jpeg';
import pic27 from '../xi_trum/Messenger_creation_f4c9450f-3f4f-4028-ae63-e9c663bad392.jpeg';
import pic28 from '../xi_trum/Messenger_creation_2ed68d72-b95d-42ee-8604-e7e03cb85b71.jpeg';
import pic29 from '../xi_trum/Messenger_creation_78802ac5-b460-432c-bb5d-8a355bf47e48.jpeg';
import pic30 from '../xi_trum/Messenger_creation_49de2ec8-e9ca-4e3e-9062-339409c8e7fd.jpeg';
import pic31 from '../xi_trum/Screenshot_20240706_190247_Bumble.jpg';
import pic32 from '../xi_trum/bumble.png';

function App() {
  return (
    <div className='container custom-container'>
      <h1 className='text-center'>
        Kỷ niệm với bé Phạm Vũ Vân Khánh aka bé Bông 🌸
      </h1>
      <h1 className='text-center'>06/07/2024 - 14/01/2025</h1>
      <div className='row mt-5'>
        <div className='col-sm-6 pt-2'>
          <h3>Hình của bé chụp mà anh thích nhất</h3>
          <h6>
            Đây là tấm hình của bé chụp mà anh ưng nhất nhưng anh quên nói với
            bé
          </h6>
          <img
            loading='lazy'
            src={favoriteXiTrumImage}
            width={300}
            className='mt-2 mb-2'
            alt='Hình của bé chụp mà anh thích nhất'
          />
          <p>Mặt mộc nhưng xinh cựccccc</p>
        </div>
        <div className='col-sm-6 pt-2'>
          <h3>Hình của tụi mình mà anh thích nhất</h3>
          <h6>
            Đây là tấm hình của anh chụp ở Aeon Mall Tân Phú ngày 06/07/2024
            13:31:33, cũng là tấm hình đầu tiên của tụi mình chụp với nhau
          </h6>
          <img
            loading='lazy'
            src={favoriteOurImage}
            width={400}
            className='mt-2 mb-2'
            alt='Hình của tụi mình mà anh thích nhất'
          />
          <p>
            Và nó cũng là tấm ảnh anh dùng làm hình nền điện thoại trong suốt
            khoảng thời gian tụi mình ở bên nhau
          </p>
        </div>
      </div>
      <h3 className='mt-5 mb-5 text-center'>
        Còn dưới này là toàn bộ hình của tụi mình
      </h3>
      <div className='row mb-5'>
        <div className='col-sm-3'>
          <img loading='lazy' src={pic1} className='mt-2 mb-2' width={200} />
          <p>Tấm này chụp vào 19/06/2024 - Trước khi gặp bé</p>
        </div>
        <div className='col-sm-3'>
          <img loading='lazy' src={pic2} className='mt-2 mb-2' width={200} />
          <p>Tấm này chụp vào 17/01/2025 - 3 ngày sau khi chúng ta dừng lại</p>
        </div>
        <div className='col-sm-3'>
          <img loading='lazy' src={pic3} className='mt-2 mb-2' width={265} />
        </div>
        <div className='col-sm-3'>
          <img loading='lazy' src={pic4} className='mt-2 mb-2' width={350} />
        </div>
      </div>
      <div className='row mb-5'>
        <div className='col-sm-3'>
          <img loading='lazy' src={pic5} className='mt-2 mb-2' width={200} />
          <p>Thêm 1 tấm vào hôm first date 06/07/2024 ở Aeon Mall Tân Phú nè</p>
        </div>
        <div className='col-sm-3'>
          <img loading='lazy' src={pic6} className='mt-2 mb-2' width={300} />
          <p>Tấm này chụp ở Amazon Coffee nè - 20/08/2024 18:41:50</p>
        </div>
        <div className='col-sm-3'>
          <img loading='lazy' src={pic24} className='mt-2 mb-2' height={400} />
          <p>Móc khóa đôi nèeee</p>
        </div>
        <div className='col-sm-3'>
          <img loading='lazy' src={pic7} className='mt-2 mb-2' height={400} />
        </div>
      </div>
      <div className='row mb-5'>
        <div className='col-sm-3'>
          <img loading='lazy' src={pic8} className='mt-2 mb-2' width={200} />
        </div>
        <div className='col-sm-3'>
          <img loading='lazy' src={pic9} className='mt-2 mb-2' width={300} />
        </div>
        <div className='col-sm-3'>
          <img loading='lazy' src={pic10} className='mt-2 mb-2' height={500} />
          <p>Xinhhhhhhhhhh</p>
        </div>
        <div className='col-sm-3'>
          <img loading='lazy' src={pic11} className='mt-2 mb-2' height={400} />
        </div>
      </div>
      <div className='row mb-5'>
        <div className='col-sm-3'>
          <img loading='lazy' src={pic12} className='mt-2 mb-2' width={200} />
        </div>
        <div className='col-sm-3'>
          <img loading='lazy' src={pic13} className='mt-2 mb-2' width={300} />
        </div>
        <div className='col-sm-3'>
          <img loading='lazy' src={pic14} className='mt-2 mb-2' height={400} />
        </div>
        <div className='col-sm-3'>
          <img loading='lazy' src={pic15} className='mt-2 mb-2' height={400} />
        </div>
      </div>
      <div className='row mb-5'>
        <div className='col-sm-3'>
          <img loading='lazy' src={pic16} className='mt-2 mb-2' width={250} />
        </div>
        <div className='col-sm-3'>
          <img loading='lazy' src={pic17} className='mt-2 mb-2' width={250} />
          <p>Tấm này trông cute nên dùng làm hình nền khóa màn hình 😁</p>
        </div>
        <div className='col-sm-3'>
          <img loading='lazy' src={pic20} className='mt-2 mb-2' height={400} />
        </div>
        <div className='col-sm-3'>
          <img loading='lazy' src={pic21} className='mt-2 mb-2' height={400} />
        </div>
      </div>
      <div className='row mb-5'>
        <div className='col-sm-3'>
          <img loading='lazy' src={pic18} className='mt-2 mb-2' width={250} />
        </div>
        <div className='col-sm-3'>
          <img loading='lazy' src={pic19} className='mt-2 mb-2' width={300} />
        </div>
        <div className='col-sm-3'>
          <img loading='lazy' src={pic23} className='mt-2 mb-2' height={400} />
        </div>
        <div className='col-sm-3'>
          <img loading='lazy' src={pic22} className='mt-2 mb-2' height={400} />
        </div>
      </div>
      <div className='row mb-5'>
        <div className='col-sm-3'>
          <img loading='lazy' src={pic25} className='mt-2 mb-2' width={250} />
          <p>Những tấm hình em chụp trước buổi first date để nhá hàng nè 😆</p>
        </div>
        <div className='col-sm-3'>
          <img loading='lazy' src={pic26} className='mt-2 mb-2' width={300} />
          <p>Những tấm hình em chụp trước buổi first date để nhá hàng nè 😆</p>
        </div>
        <div className='col-sm-3'>
          <img loading='lazy' src={pic27} className='mt-2 mb-2' height={400} />
          <p>Những tấm hình em chụp trước buổi first date để nhá hàng nè 😆</p>
        </div>
        <div className='col-sm-3'>
          <img loading='lazy' src={pic28} className='mt-2 mb-2' height={400} />
          <p>Những tấm hình em chụp trước buổi first date để nhá hàng nè 😆</p>
        </div>
      </div>
      <div className='row mb-5'>
        <div className='col-sm-3'>
          <img loading='lazy' src={pic29} className='mt-2 mb-2' width={250} />
          <p>Những tấm hình em chụp trước buổi first date để nhá hàng nè 😆</p>
        </div>
        <div className='col-sm-3'>
          <img loading='lazy' src={pic30} className='mt-2 mb-2' width={300} />
          <p>Những tấm hình em chụp trước buổi first date để nhá hàng nè 😆</p>
        </div>
        <div className='col-sm-3'>
          <img loading='lazy' src={pic31} className='mt-2 mb-2' height={400} />
          <p>
            Còn đây là tấm hình trên Bumble, cũng là tấm hình gây ấn tượng ban
            đầu với anh và cũng là nơi khởi đầu mọi thứ
          </p>
        </div>
      </div>
      <div className='bumble row text-center mb-5'>
        <div className='col'>
          <img loading='lazy' src={pic32} className='mt-2 mb-2' width={1200} />
          <p>30/06/2024 - Nơi mọi thứ thực sự bắt đầu 😁</p>
          <p>
            Nhắc lại, anh không bao giờ hối hận về cái quẹt phải của mình 😁
          </p>
        </div>
      </div>
      {/* Lời cảm ơn */}
      <div className='text-center mb-5'>
        <h1 className='mt-5 mb-2'>Lời kết</h1>
        <div className='mb-5'>
          <h4>
            Cảm ơn em đã đến bên anh, cảm ơn em đã chịu đựng những lần anh làm
            em thất vọng
          </h4>
          <h4>
            Cảm ơn em trong suốt 193 ngày qua, tương đương 6 tháng 9 ngày ở bên
            nhau đã cho anh biết thế nào là yêu, thế nào là hạnh phúc
          </h4>
        </div>
        <div className='mb-5'>
          <h4>
            Anh xin lỗi vì những lần làm em buồn, làm em khóc, làm em thất vọng
          </h4>
          <h4>
            Anh xin lỗi vì những lần anh không thể hiểu em, không ở bên em những
            lúc em cần
          </h4>
          <h4>
            Anh xin lỗi vì đã để em thốt ra rằng 1 phần trong em cảm thấy hối
            hận khi quẹt phải
          </h4>
        </div>
        <div className='mb-5'>
          <h4>
            Chúc em tìm được đúng đam mê của mình, tìm được đúng nơi mà em có
            thể thỏa sức bung mình
          </h4>
          <h4>
            Anh hong còn ở đó để support em nữa, em phải cố lên nha, em hãy luôn
            là chính mình em nhé, hãy luôn mạnh dạn đấm bất kỳ chướng ngại vật
            nào
          </h4>
          <h4>
            Anh Hoàng IT 1m8, tập gym 6 múi, đẹp trai, anh Hoàng khủng long
            🦖🦖🦖 sẽ luôn ủng hộ và tự hào về em
          </h4>
        </div>
        <h1 className='mt-5 mb-2'>Tạm biệt em nhé, em bé của anh</h1>
      </div>
      <footer>
        <p className='text-center'>
          Copyright © by{' '}
          <a
            href='https://github.com/theksbd/be-bong'
            target='_blank'
            rel='noreferrer'
          >
            theksbd
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
