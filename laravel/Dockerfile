FROM php:7.4-fpm

RUN apt-get update -yqq \
  && apt-get install -yqq --no-install-recommends \
    libicu-dev \
    zip \
    unzip \
  && rm -rf /var/lib/apt/lists

RUN docker-php-ext-install intl pdo_mysql mysqli opcache

COPY --from=composer /usr/bin/composer /usr/bin/composer

RUN { \
  echo 'upload_max_filesize = 100M'; \
  echo 'post_max_size = 108M'; \
  echo 'short_open_tag = On'; \
  echo 'fastcgi.logging = 1'; \
  echo 'opcache.enable=1'; \
  echo 'opcache.memory_consumption=128'; \
  echo 'opcache.interned_strings_buffer=8'; \
  echo 'opcache.max_accelerated_files=4000'; \
  echo 'opcache.revalidate_freq=60'; \
  echo 'opcache.fast_shutdown=1'; \
} > /usr/local/etc/php/conf.d/overrides.ini


WORKDIR /var/www/html

ADD src-laravel /var/www/html
# RUN chown -R www-data:www-data /app
RUN chown -R www-data:www-data /var/www/html

#RUN composer install
