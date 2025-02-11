from flask import Blueprint, request, jsonify

# Security
from src.utils.Security import Security
# Services
from src.services.AccountService import AccountService

main = Blueprint('account_blueprint', __name__)

@main.route('/current', methods=['POST'])
def account_current_controller():
    has_access = Security.verify_token(request.headers)

    if has_access:
        cc = request.json['cc']
        message = AccountService.account_current_service(cc)

        if message == 'Cuenta corriente generada exitosamente.':
            return jsonify({'message': message }), 201
        else:
            return jsonify({'message': message}), 400
    else:
        return jsonify({'message': '¡Error de autenticación, inicie sesión!'}), 401