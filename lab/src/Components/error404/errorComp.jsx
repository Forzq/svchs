
import "../error404/errorComp.css";


export default function errorComp(){
    
        return(
            <body>
    <div class="error-container">
        <div class="error-code">404</div>
        <div class="error-message">Ошибка пути, страница не найдена</div>
        <a href="/" class="button">Вернуться на главную</a>
    </div>
    </body>
        )
    }